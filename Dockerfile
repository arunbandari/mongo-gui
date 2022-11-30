FROM node:lts-stretch

COPY . /app

WORKDIR /app

RUN npm install && \
npm run build-ui

ENTRYPOINT ["sh","/app/entrypoint.sh"]