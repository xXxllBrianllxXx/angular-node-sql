FROM node:20.11.1

WORKDIR /usr/src/api

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm i

RUN npm run build

COPY src/ ./src/

CMD ["npm", "start"]