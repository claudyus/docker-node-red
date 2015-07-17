FROM google/nodejs

RUN npm install -g node-red node-red-admin

WORKDIR /app
ADD . /app

RUN npm install bcryptjs randomstring && node /app/password.js

EXPOSE 1880

CMD node-red -c /app/settings.js
