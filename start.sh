#!/bin/bash

set -x

if [[ -n $NODERED_MODULES ]]; then
	npm install -g $NODERED_MODULES
fi

node-red -s /app/settings.js
