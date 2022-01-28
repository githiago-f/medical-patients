FROM node:16.13-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /urs/src/app

COPY package.json pnpm-lock.yaml ./

RUN yarn

COPY . .

EXPOSE 3002

CMD yarn start:dev
