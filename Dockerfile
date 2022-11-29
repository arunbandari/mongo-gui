FROM node:lts-stretch

COPY . /app

WORKDIR /app

RUN set -ex && \
        export http_proxy=http://$proxyuser:$proxypass@proxy.system.local:80/ && \
        export https_proxy=http://$proxyuser:$proxypass@proxy.system.local:80/ && \
npm config set strict-ssl false && \
npm install && \
npm run build-ui

ENTRYPOINT ["sh","/app/entrypoint.sh"]