FROM python:3.6-alpine
MAINTAINER Joe Badaczewski <joe307bad@gmail.com>
ENV PS1="\[\e[0;33m\]|> bada <| \[\e[1;35m\]\W\[\e[0m\] \[\e[0m\]# "

WORKDIR /src
COPY . /src
RUN pip install --no-cache-dir -r requirements.txt \
    && python setup.py install
WORKDIR /
ENTRYPOINT ["bada"]
