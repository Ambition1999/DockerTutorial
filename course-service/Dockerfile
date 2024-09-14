FROM node:10

# App directory
WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]