FROM node:12

WORKDIR /usr/src/

COPY package.json .

#COPY package-lock.json /usr/src/app

RUN npm install

RUN ls

RUN npm install -g serve

WORKDIR /usr/src/app/

COPY . .

RUN cp -r ../node_modules ./

RUN ls

EXPOSE 5000

RUN npm run build

CMD ["serve", "-s", "build"]
