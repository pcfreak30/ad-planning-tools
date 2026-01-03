#!/usr/bin/env bash
# Branch naming algorithm for Spec-Driven Development
# Generates feature branch names from descriptions

set -e

# Source common functions
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/common.sh"

# Common stop words to filter out
STOP_WORDS="^(i|a|an|the|to|for|of|in|on|at|by|with|from|is|are|was|were|be|been|being|have|has|had|do|does|did|will|would|should|could|can|may|might|must|shall|this|that|these|those|my|your|our|their|want|need|add|get|set)$"

# Clean and format a branch name
clean_branch_name() {
    local name="$1"
    echo "$name" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/-\+/-/g' | sed 's/^-//' | sed 's/-$//'
}

# Generate branch name from description
generate_branch_name() {
    local description="$1"
    
    # Convert to lowercase and split into words
    local clean_name=$(echo "$description" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/ /g')
    
    # Filter words: remove stop words and short words
    local meaningful_words=()
    for word in $clean_name; do
        [[ -z "$word" ]] && continue
        
        if ! echo "$word" | grep -qiE "$STOP_WORDS"; then
            if [[ ${#word} -ge 3 ]]; then
                meaningful_words+=("$word")
            elif echo "$description" | grep -q "\b${word^^}\b"; then
                # Keep short words if they appear as uppercase (likely acronyms)
                meaningful_words+=("$word")
            fi
        fi
    done
    
    # Take first 3-4 meaningful words
    if [[ ${#meaningful_words[@]} -gt 0 ]]; then
        local max_words=3
        [[ ${#meaningful_words[@]} -eq 4 ]] && max_words=4
        
        local result=""
        local count=0
        for word in "${meaningful_words[@]}"; do
            [[ $count -ge $max_words ]] && break
            [[ -n "$result" ]] && result="$result-"
            result="$result$word"
            count=$((count + 1))
        done
        echo "$result"
    else
        # Fallback
        local cleaned=$(clean_branch_name "$description")
        echo "$cleaned" | tr '-' '\n' | grep -v '^$' | head -3 | tr '\n' '-' | sed 's/-$//'
    fi
}

# Get highest feature number from branches and specs
get_highest_number() {
    local specs_dir="$1"
    local highest=0
    
    # From specs directories
    if [[ -d "$specs_dir" ]]; then
        for dir in "$specs_dir"/*; do
            [[ -d "$dir" ]] || continue
            local dirname=$(basename "$dir")
            local number=$(echo "$dirname" | grep -o '^[0-9]\+' || echo "0")
            number=$((10#$number))
            [[ $number -gt $highest ]] && highest=$number
        done
    fi
    
    # From git branches
    if has_git; then
        local branches=$(git branch -a 2>/dev/null || echo "")
        while IFS= read -r branch; do
            local clean_branch=$(echo "$branch" | sed 's/^[* ]*//; s|^remotes/[^/]*/||')
            if echo "$clean_branch" | grep -q '^[0-9]\{3\}-'; then
                local number=$(echo "$clean_branch" | grep -o '^[0-9]\{3\}' || echo "0")
                number=$((10#$number))
                [[ $number -gt $highest ]] && highest=$number
            fi
        done <<< "$branches"
    fi
    
    echo $highest
}

# Main: Generate complete branch name
main() {
    local description="$1"
    local short_name="${2:-}"
    local branch_number="${3:-}"
    local specs_dir="${4:-./specs}"
    
    # Generate or use provided short name
    if [[ -n "$short_name" ]]; then
        BRANCH_SUFFIX=$(clean_branch_name "$short_name")
    else
        BRANCH_SUFFIX=$(generate_branch_name "$description")
    fi
    
    # Determine branch number
    if [[ -z "$branch_number" ]]; then
        local highest=$(get_highest_number "$specs_dir")
        branch_number=$((highest + 1))
    fi
    
    # Format with zero-padding
    local feature_num=$(printf "%03d" "$((10#$branch_number))")
    local branch_name="${feature_num}-${BRANCH_SUFFIX}"
    
    # Validate against GitHub's 244-byte limit
    local max_length=244
    if [[ ${#branch_name} -gt $max_length ]]; then
        local max_suffix=$((max_length - 4))  # Account for "###-"
        local truncated=$(echo "$BRANCH_SUFFIX" | cut -c1-$max_suffix)
        truncated=$(echo "$truncated" | sed 's/-$//')
        branch_name="${feature_num}-${truncated}"
        echo "Warning: Branch name truncated to fit GitHub's 244-byte limit" >&2
    fi
    
    echo "$branch_name"
}

# Usage examples:
#   ./branch-naming.sh "Add user authentication system"
#   ./branch-naming.sh "Implement OAuth2" --short-name "oauth2" --number 5
#   source branch-naming.sh && main "description"