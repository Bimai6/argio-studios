#!/bin/bash

cd "$(dirname "$0")/.."

cd frontend/

echo "Executing frontend tests with vitest..."

npx vitest run --coverage