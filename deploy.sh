#!/user/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "first commit"
git push -f git@github.com:mohamedgaballah99/homedel.git master:gh-pages 

cd -