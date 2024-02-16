FROM node:18-slim

WORKDIR /service

COPY package.json \
  yarn.lock \
  ./

RUN yarn --frozen-lockfile

COPY views ./views
COPY src ./src

CMD ["yarn", "run", "start"]