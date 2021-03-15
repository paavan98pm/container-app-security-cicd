FROM node:8-alpine3.9
# FROM node:15.4-alpine

RUN apk -U upgrade

RUN mkdir /app
WORKDIR /app

COPY ./app/package*.json ./
RUN npm ci --only=prod

COPY app .

EXPOSE 3000
ENTRYPOINT ["node", "/app/app.js"]
