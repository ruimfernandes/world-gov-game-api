FROM node:8

RUN apt-get update

ADD package.json /src/package.json

RUN cd /src && npm install --production

ADD /build /src

WORKDIR /src

ENV NODE_ENV=production

CMD ["npm", "run", "production"]