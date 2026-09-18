#!/bin/bash

set -e

cd /app/dormitory-management/frontend

echo "🚀 Starting Frontend Server..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start development server
npm run dev
