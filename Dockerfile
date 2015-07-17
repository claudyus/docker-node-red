FROM google/nodejs

RUN npm install -g node-red node-red-admin randomstring

WORKDIR /app
ADD . /app

RUN node /app/password.js

EXPOSE 1880

CMD node-red -c /app/settings.js
