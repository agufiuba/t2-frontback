FROM node:latest

RUN mkdir /app
WORKDIR /app

RUN chown -R node /app
RUN chown -R node /usr/local
USER node

ADD package.json /app
RUN npm config set registry "http://registry.npmjs.org/" && npm i && npm i -g @angular/cli

ADD . /app

EXPOSE 3000

CMD [ "ng", "serve", "-p", "3000" ]
