FROM node:latest as build-stage
WORKDIR /usr/local/app
COPY package*.json ./
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginx:latest as production-stage
COPY --from=build-stage /usr/local/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker build -t vt:stream .
# docker run --name vt_stream --rm -d -p 3333:80 vt:stream
