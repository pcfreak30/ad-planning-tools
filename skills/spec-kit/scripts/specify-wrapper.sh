#!/usr/bin/env bash
# Wrapper for speckit.specify to handle arguments with spaces

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/common.sh"

DESCRIPTION="$SPEC_KIT_DESCRIPTION"
SPECS_DIR="${2:-./specs}"

source "$SCRIPT_DIR/branch-naming.sh" "$DESCRIPTION" "" "" "$SPECS_DIR"