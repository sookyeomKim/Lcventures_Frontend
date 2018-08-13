#!/usr/bin/env bash

echo 'gogo permissions'
chown -R ubuntu:www-data ./dist
chmod -R 750 ./dist
echo 'Done...'
