FROM node:18.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080
ENV MONGODB_URI=mongodb://mongo:27017/apollo

EXPOSE 8080

CMD ["npm", "start"]
