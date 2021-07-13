FROM node:latest

ENV NODE_ENV=production

COPY ["package.json", "package-lock.json", "", "./"]

RUN npm install --production

COPY server.js ./

EXPOSE 3000

CMD ["node", "./server.js"]