FROM node:14.16-slim

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only="prod"

COPY index.js .

EXPOSE 10010
CMD ["npm", "run", "start"]
