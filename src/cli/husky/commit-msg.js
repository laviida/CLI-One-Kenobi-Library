"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitMsg = void 0;
exports.commitMsg = `#!/bin/bash
. "$(dirname "$0")/_/husky.sh"

echo $1
npx commitlint --edit $1

msg=\`cat $1\`
version=""

case $msg in
[*"major"*] | [*"BREAKING CHANGE"*])
    version="major"  
;;
*"feat"*)
    version="minor"  
;;
*)
    version="patch"
;;
esac

npm version --no-git-tag-version $version

if [ -e "$PWD/.husky/_post-commit" ]
then
    mv "$PWD/.husky/_post-commit" "$PWD/.husky/post-commit"
fi
exit 0
`;
