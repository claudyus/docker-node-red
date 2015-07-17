FROM google/nodejs

RUN npm install -g node-red

EXPOSE 1880

CMD node-red
