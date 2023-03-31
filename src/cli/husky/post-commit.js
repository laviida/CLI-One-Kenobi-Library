"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCommit = void 0;
exports.postCommit = `#!/bin/bash
. "$(dirname "$0")/_/husky.sh"

if [ -e "$PWD/.husky/post-commit" ]
then
    mv "$PWD/.husky/post-commit" "$PWD/.husky/_post-commit"
fi
git add .
git commit --amend -C HEAD --no-verify
exit 0
`;
