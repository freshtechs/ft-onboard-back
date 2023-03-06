FROM node:16-alpine

RUN npm install -g nodemon dotenv

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]