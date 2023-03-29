#Base image taken from > https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
FROM cypress/browsers:node-16.18.1-chrome-110.0.5481.96-1-ff-109.0-edge-110.0.1587.41-1
#Adding Java 11 JDK for allure to generate report
RUN mkdir -p /usr/share/man/man1
RUN apt-get update && \
  apt-get upgrade -y
RUN apt-get install openjdk-11-jre -y
RUN echo java -version
#Create a folder to store cypress project
RUN mkdir /cypress-e2e-test
#Make docker work in cypress project directory
WORKDIR /cypress-e2e-test
#Copy required files for the project to build
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./jsconfig.json .
COPY ./reporter-config.json .
COPY ./cypress ./cypress
#Install dependencies in the project directory base on package.json
RUN npm install
#Provide executable commands for the container to use
ENTRYPOINT [ "npm", "run"]
#Specify more parameters to the last entrypoint
CMD [ "" ]