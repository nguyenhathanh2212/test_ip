FROM node:12 AS test
RUN apt update

FROM node:12 AS admin

WORKDIR /test
ADD ./package.json .
ADD ./package-lock.json .
ADD ./app.js app.js
RUN npm install

CMD [ "node", "app.js" ]
