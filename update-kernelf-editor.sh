#!/bin/sh

# use this script after making changes in 'kernelf-editor' to update the 'kernelf-angular-demo'

set -e
cd "$(dirname "$0")"

rm -rf build/
rm -rf kernelf-editor/build/
rm -rf kernelf-angular-demo/node_modules/@modelix/kernelf-editor
rm -rf kernelf-angular-demo/.angular
rm -rf kernelf-angular-demo/build
rm -rf kernelf-angular-demo/dist

./gradlew :kernelf-editor:clean :kernelf-editor:packJsPackage
(
  cd kernelf-angular-demo

  npm uninstall @modelix/kernelf-editor --no-save
  npm install @modelix/kernelf-editor
)