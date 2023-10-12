#!/bin/bash
port=$1
kill -9 $(lsof -i :$port | grep $port | awk '{print $2}')
JENKINS_NODE_COOKIE=dontKillMe serve -s build -l $1 &
b='200'
until [ "$(curl -s -o /dev/null -I -w "%{http_code}" http://localhost:$1)" = "$b" ]
do
   sleep 2s
done