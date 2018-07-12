FROM node:8-alpine

WORKDIR /app

RUN apk add --update bash ca-certificates
RUN npm install -g node-red@0.18.5

ADD . /app

VOLUME /app/config/

STOPSIGNAL SIGINT

CMD /app/start.sh
