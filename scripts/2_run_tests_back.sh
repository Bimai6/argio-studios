#!/bin/bash

cd "$(dirname "$0")/.."

cd backend/

source .venv/Scripts/activate

pytest \
    --cov=argiobackend.argioapp.views \
    --cov=argiobackend.argioapp.models \
    --cov=argiobackend.argioapp.serializers \
    --cov=argiobackend.argioapp.signals \
    --cov-report=term \
    --cov-report=html

start htmlcov/index.html