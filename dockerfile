FROM node:slim
RUN apt-get update
RUN apt-get upgrade
RUN apt-get -y install git
RUN git clone https://github.com/yctsai2727/PersonalPage.git
WORKDIR /PersonalPage
RUN npm install
CMD ["npm", "start"]