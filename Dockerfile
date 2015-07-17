FROM google/nodejs

RUN npm install -g node-red node-red-admin

EXPOSE 1880

CMD node-red
