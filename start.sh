#!/bin/bash
set -x


if [[ -n $NODES_URL_FILE ]]; then
    wget $NODES_URL_FILE -O /tmp/nodes_file.txt
    cat /tmp/nodes_file.txt | xargs npm install -g
fi

if [[ $AUTH_METHOD == "http" ]]; then
    echo "Using http based auth!"
else
    export AUTH_METHOD="passwd";
    npm install bcryptjs randomstring
    grep 'PASS' settings.js && node /app/gen_password.js
fi


node-red -s /app/settings.js
