# Build
FROM node:8 as build
WORKDIR /app
COPY . ./
# Yarn's parralelization of package installations 
# should make it faster than NPM
RUN yarn
RUN yarn build

# Set up server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]