#!/bin/bash
LIP="http://192.168.119.147:3000/"

pnpm run generate
npx @ionic/cli capacitor sync android --no-build
eval "npx @ionic/cli capacitor run android --livereload-url=${LIP} --external --mode development"
