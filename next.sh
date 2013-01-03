#!/bin/sh

gitc=$(head -n 1 ../presentation/git_script)
tail -n +2 git_script > .git_script
mv .git_script git_script

cd ../jqbp 

$gitc

git log -1 --stat
read -p "Press any key... "
git diff HEAD^ HEAD
