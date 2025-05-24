#!/bin/bash

cd "$(dirname "$0")/backend"

source .venv/Scripts/activate

py manage.py runserver