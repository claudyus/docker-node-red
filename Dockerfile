FROM google/nodejs

RUN npm install -g node-red node-red-admin

WORKDIR /app
ADD . /app

RUN npm install bcryptjs randomstring && node /app/password.js && mkdir -p /app/config

EXPOSE 1880
VOLUME /app/config/

CMD node-red -s /app/settings.js 
