#!/bin/bash

cd "$(dirname "$0")/.."

cd backend/

source .venv/Scripts/activate

py manage.py runserver