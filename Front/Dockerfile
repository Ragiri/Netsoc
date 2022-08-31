FROM node:14-alpine
RUN mkdir /front
WORKDIR /front
COPY . .
RUN npm cache clean --force
RUN npm install
CMD ["npm", "start"]