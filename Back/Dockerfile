FROM node:14-alpine
RUN mkdir /back
WORKDIR /back
COPY . .
RUN npm cache clean --force
RUN npm install
CMD ["npm", "start"]