FROM node:6.6-slim

RUN npm install -g node-red node-red-admin

WORKDIR /app
ADD . /app

RUN npm install -g bcryptjs randomstring

VOLUME /app/config/

CMD /app/start.sh
