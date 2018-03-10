FROM node:alpine

RUN apk update && apk add bash ca-certificates
RUN npm install -g node-red node-red-admin

WORKDIR /app
ADD . /app

VOLUME /app/config/

CMD /app/start.sh
