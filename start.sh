#!/bin/bash
set -x


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
if [[ -n $AUTH_URL ]]; then
    echo "Using http based auth!"
    export AUTH_METHOD="http";
else
    export AUTH_METHOD="passwd";
    node /app/gen_password.js
fi

# workaround node-red-admin port
sed -i 's/1880/5000/g' /usr/local/lib/node_modules/node-red-admin/lib/config.js

node-red -s /app/settings.json
