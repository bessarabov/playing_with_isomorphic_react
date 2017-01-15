FROM node:6.9.1

RUN mkdir /app
WORKDIR /app

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb http://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list \
    && apt-get update && apt-get install yarn

ADD package.json /app
ADD yarn.lock /app
RUN yarn install

ADD entry.js /app/
ADD index.html /app/
ADD webpack.config.js /app/
ADD src /app/src

RUN npm run build

ADD cmd /app/

EXPOSE 80

CMD ./cmd
