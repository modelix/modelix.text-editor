#!/bin/sh

set -e

git clean -xdf -e .idea
rm -f kernelf-angular-demo/package-lock.json
rm -f kotlin-js-store/yarn.lock
./gradlew build --no-build-cache --rerun-tasks
