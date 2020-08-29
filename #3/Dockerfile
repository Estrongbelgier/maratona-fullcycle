FROM node:12.14.0-alpine3.11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g @nestjs/cli@7.4.1
RUN yarn

COPY . .

EXPOSE 3000
CMD [ "nest", "start" ]