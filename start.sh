#!/bin/bash
set -xe

if [[ -n $NODES_URL_FILE ]]; then
    wget $NODES_URL_FILE -O /tmp/nodes_file.txt
    cat /tmp/nodes_file.txt | xargs npm install -g
fi

if [[ -f /app/.nodered/extra_modules.txt ]]; then
    echo "*** Install modules from /app/.nodered/extra_modules.txt"
    cat /app/.nodered/extra_modules.txt | xargs npm install -g
fi

# we are going to use this in user-auth. install locally
npm install bcryptjs randomstring when request debug
if [[ -n "$NO_AUTH" ]]; then
    # if NO_AUTH env is set
    echo "*** WARNING: Disable auth ***"
    export AUTH_METHOD="noauth"
elif [[ -n $AUTH_URL ]]; then
    # if AUTH_METHOD == http
    export AUTH_METHOD="http";
    echo "Using http based auth!"
else
    # set default auth method if nothing else defined
    export AUTH_METHOD="passwd"
    echo "Using passwd based auth!"
    node /app/gen_password.js
fi

env
echo "debug: Starting nodered... "
node-red -s /app/settings.js
