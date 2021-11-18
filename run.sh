#!/bin/bash

# [Frontend]

# Install dependencies
npm install --prefix frontend

# Run frontend server
npm run --prefix frontend serve -- --port 8080 2>&1 > /dev/null &

# [Backend]

# Install dependencies
if [ ! -d "venv" ]; then
    python3 -m venv venv
    venv/bin/pip install -r requirements.txt
fi

source venv/bin/activate

# Init database
if [ ! -d backend/backend/db.sqlite3 ]; then
    python backend/manage.py migrate
    python backend/manage.py loaddata "backend/dumps/development.json"
fi

# Run backend server
python3 backend/manage.py runserver 8000 2>&1 > /dev/null &

echo "==================================="
echo "Frontend: http://localhost:8080/"
echo "Backend: http://localhost:8000/"
echo "==================================="

read