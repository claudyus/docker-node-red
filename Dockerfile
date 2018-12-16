FROM node:lts-alpine

WORKDIR /app

RUN apk add --update bash ca-certificates
RUN npm install -g --unsafe-perm node-red@0.19.5

ADD . /app

# config and flows files
VOLUME /app/.nodered/

CMD /app/start.sh
