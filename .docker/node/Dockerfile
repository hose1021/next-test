FROM node:20-alpine

ARG REFRESHED_AT
ENV REFRESHED_AT $REFRESHED_AT

RUN apk -U upgrade \
  && apk add --no-cache \
    git \
    openssh
