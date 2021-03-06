FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY src/package*.json ./

USER node

RUN npm install

COPY --chown=node:node src/ .
# the port where the node.js application with run
EXPOSE 8080

CMD [ "node", "index.js" ]
