FROM node:20.11-alpine
WORKDIR  /app
COPY package*.json ./
RUN npm install
COPY .  .
RUN  npm install
EXPOSE 5173

CMD [ "npm", "run", "dev" ]
