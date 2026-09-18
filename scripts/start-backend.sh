#!/bin/bash

set -e

cd /app/dormitory-management/backend

echo "🚀 Starting Backend Server..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run database migrations (when using NestJS + TypeORM/Prisma)
# npm run migration:run

# Start backend
npm run dev
