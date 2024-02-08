#!/bin/bash

pnpm run generate
npx @ionic/cli capacitor sync android --no-build
eval "npx @ionic/cli capacitor run android --livereload-url=${1} --external --mode development"
