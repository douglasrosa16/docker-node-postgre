FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install -g npm@7.20.0
COPY . .

FROM nginx
EXPOSE 80
COPY --from=0 /app /usr/share/nginx/html
