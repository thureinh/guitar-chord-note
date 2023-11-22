FROM node:21-alpine3.18

WORKDIR /home/node/app

COPY backend/package.json ./

RUN npm install

RUN npx prisma migrate dev --name init
RUN npx prisma db seed
RUN npx prisma generate

CMD ["npm", "start-dev"]