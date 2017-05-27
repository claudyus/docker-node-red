#!/bin/bash
set -x

if [[ $AUTH_METHOD == "http" ]]; then
    echo "Using http based auth!"
else
    export AUTH_METHOD="passwd";
    npm install bcryptjs randomstring
    grep 'PASS' settings.js && node /app/gen_password.js
fi

if [[ -n $NODERED_MODULES ]]; then
	npm install -g $NODERED_MODULES
fi

node-red -s /app/settings.js
