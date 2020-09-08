#!/bin/bash

yarn
yarn build

if [ "$TRAVIS_BRANCH" = "develop" ]; then
  firebase use develop
elif [ "$TRAVIS_BRANCH" = "master" ]; then
  firebase use default
fi

firebase deploy --token $FIREBASE_TOKEN
