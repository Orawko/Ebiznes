FROM ubuntu:18.04

ENV SBT_HOME /usr/local/sbt
ENV SCALA_HOME /usr/local/scala
ENV SCALA_VERSION 2.12.8
ENV SBT_VERSION 1.3.8
ENV PATH $SCALA_HOME/bin:$SBT_HOME/bin:$PATH
ENV NODE_VERSION=12.16.1

RUN apt update && apt install -y \
openjdk-8-jre-headless \
vim \
git \
unzip \
wget \
curl

RUN wget http://www.scala-lang.org/files/archive/scala-$SCALA_VERSION.tgz && \
    tar -xzf /scala-$SCALA_VERSION.tgz -C /usr/local/ && \
    ln -s /usr/local/scala-$SCALA_VERSION $SCALA_HOME && \
    rm scala-$SCALA_VERSION.tgz

RUN wget https://piccolo.link/sbt-$SBT_VERSION.tgz && \
    tar -xzf sbt-$SBT_VERSION.tgz -C /usr/local/ && \
    rm sbt-$SBT_VERSION.tgz

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

ENV NPM_VERSION=6.8.0
RUN npm install npm@$NPM_VERSION
RUN rm -rf /root/.nvm/versions/node/v${NODE_VERSION}/lib/node_modules/npm
RUN mv node_modules/npm  /root/.nvm/versions/node/v${NODE_VERSION}/lib/node_modules/npm
RUN node --version
RUN npm --version

RUN useradd -ms /bin/bash orawiec
RUN adduser orawiec sudo
USER orawiec
RUN mkdir /home/orawiec/projekt
VOLUME ["/home/orawiec/projekt"]
WORKDIR /home/orawiec

EXPOSE 8000
EXPOSE 9000
EXPOSE 5000
EXPOSE 8888
