FROM alpine:3.20 AS build

WORKDIR /app

RUN apk add hugo

COPY . /app

RUN hugo


FROM nginx:1.28-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/public /frontend
