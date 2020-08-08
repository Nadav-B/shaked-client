FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .


EXPOSE 3000


# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]