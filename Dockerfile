FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install -g npm@7.20.0
COPY . .
