FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN install npm
COPY . .
RUN npm run build

FROM ngnix:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]