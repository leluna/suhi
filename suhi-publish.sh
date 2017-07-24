#!/bin/bash

set -e

if [ "$1" = "--all" ] || [ "$1" = "-a" ]
then
	sourcedirs=`find . -regex "./\w+" ! -path "./docs"`
	printf "Directorie(s) found:\n${sourcedirs}\n\n"

	for sourcedir in $sourcedirs 
	do
		printf "Copying resources in:\n${sourcedir}\n\n"
		sourcedirname="$(basename "$sourcedir")"
		targetdir=./docs/${sourcedirname}
		printf "Copying to: ${targetdir}\n\n"
		cp $sourcedir/resources/public/index.html $targetdir/index.html
		rm -r $targetdir/css
		cp -r $sourcedir/resources/public/css $targetdir/css
		(cd $sourcedir && lein cljsbuild once min)
	done
else
	parent="$(basename "${PWD%/*}")"
	if [ "$parent" != "suhi" ]
	then
		printf "The parent directory ($parent) is not "suhi". This script must be executed in a subproject in the suhi repository. Use --all to publish all projects instead." 
		exit
	fi
	printf "Copying index.html to ../docs/${PWD##*/}\n"
	cp resources/public/index.html ../docs/${PWD##*/}/index.html
	printf "Removing ../docs/${PWD##*/}/css\n"
	rm -r ../docs/${PWD##*/}/css
	printf "Copying css directory to ../docs/${PWD##*/}\n"
	cp -r resources/public/css ../docs/${PWD##*/}/css
	printf "Performing cljsbuild...\n"
	lein cljsbuild once min
fi
