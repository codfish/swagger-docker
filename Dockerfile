FROM node:11.11

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only="prod"

COPY index.js .

EXPOSE 10010
CMD npm run start
