FROM node:lts-alpine
# WORKDIR /usr/share/nginx/html
WORKDIR /service
# RUN rm -rf ./*
COPY /src ./src
COPY /public ./public
COPY /package.json .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
# ENTRYPOINT ["nginx","-g","daemon off;"]