FROM node:16.0-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build

EXPOSE 3000

# Running the app
CMD [ "yarn", "start" ]