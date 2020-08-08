FROM node:14.3-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install
RUN npm run build

# Copying source files
COPY . .


EXPOSE 3000


# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]