FROM node:18 AS build
WORKDIR /app

COPY package.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src

RUN npx tsc --outDir dist

EXPOSE 4000

CMD ["node", "dist/server.js"]