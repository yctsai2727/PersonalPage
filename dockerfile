FROM node:latest
RUN apk update
RUN apk upgrade
RUN apk add git
RUN git clone https://github.com/yctsai2727/PersonalPage.git
WORKDIR /PersonalPage
RUN npm install
CMD ["npm", "start"]