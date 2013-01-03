#!/bin/sh

cd ../jqbp

git checkout master

git log | grep commit | awk '{print $1 " " substr($2, 0, 6)}' | sed '1!G;h;$!d' | sed 's/commit/git checkout/' > ../presentation/git_script

cd ../presentation

./next.sh