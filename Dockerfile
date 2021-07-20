#Base da Imagem
FROM node:alpine

#Criar essa pasta dentro do Container
WORKDIR /usr/app

#Copiar todos os arquivos package.json -> ele tem todas as dependências do projeto
COPY package*.json ./

#Executar npm install para instalar as dependências dentro do Container
RUN npm install

#Copia todos os arquivos do projeto atual para dentro do Container
#Criar .dockerignore para não copiar o node_modules pois foi criado no npm install
COPY . .

#Iniciar uma porta que será ouvida
EXPOSE 3333

#Executar o comando quando finalizar a execução do Dockerfile - Vai iniciar o node
CMD ["npm","start"]
