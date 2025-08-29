FROM node:22 AS build

WORKDIR /app

COPY package.json ./

COPY tsconfig.json ./

COPY src ./src

RUN npm i

RUN npx tsc

EXPOSE 4000

CMD ["node", "dist/src/server.js"]