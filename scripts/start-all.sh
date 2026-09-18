#!/bin/bash

echo "🐳 Starting Infrastructure (Docker)..."
docker-compose -f docker-compose.dev.yml up -d

echo "⏳ Waiting for services to be ready..."
sleep 5

echo "📦 Starting Backend..."
./scripts/start-backend.sh &
BACKEND_PID=$!

sleep 3

echo "📦 Starting Frontend..."
./scripts/start-frontend.sh &
FRONTEND_PID=$!

echo "✅ All services started!"
echo "   Backend:  http://localhost:3000"
echo "   Frontend: http://localhost:3001"
echo "   Redis:    localhost:6379"
echo "   Postgres: localhost:5432"
echo "   MinIO:    http://localhost:9001"

# Keep running
wait $BACKEND_PID $FRONTEND_PID
