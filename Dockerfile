FROM node:latest

RUN mkdir /app
WORKDIR /app

RUN chown -R node /app
USER node

ADD package.json /app
RUN npm config set registry "http://registry.npmjs.org/" && npm i && npm i @angular/cli

ADD . /app

EXPOSE 3000

CMD [ "node_modules/@angular/cli/bin/ng", "serve", "-p", "3000" ]
