FROM node:9.2-alpine

RUN apk update && apk add bash
RUN npm install -g node-red node-red-admin

WORKDIR /app
ADD . /app

VOLUME /app/config/

CMD /app/start.sh
