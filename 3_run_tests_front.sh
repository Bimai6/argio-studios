#!/bin/bash

cd "$(dirname "$0")/frontend"

echo "Executing frontend tests with vitest..."

npx vitest run --coverage