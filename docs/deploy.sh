#!/usr/bin/env sh

# abort on errors
set -e

#build commands
yarn build

# navigate into the build output directory
cd .vuepress/dist

git init
git add -A
git commit -m "deploy with vuepress script"
git push -f https://github.com/lee-yeonji/lee-yeonji.github.io.git main:gh-pages

cd -