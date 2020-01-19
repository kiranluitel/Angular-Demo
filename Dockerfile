FROM node:latest as node
WORKDIR /app
COPY package.json  package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/todo /usr/share/nginx/html
EXPOSE 80
RUN rm /etc/nginx/sites-enabled/default
CMD ["nginx","-g","daemon off;"]