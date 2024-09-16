# Stage 1: Build the frontend app
FROM node:18-alpine as build
WORKDIR /app

# Copy the package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app’s source code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output from the first stage to Nginx’s html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT ["nginx", "-g", "daemon off;"]