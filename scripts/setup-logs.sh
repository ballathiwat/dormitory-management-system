#!/bin/bash

mkdir -p /app/dormitory-management/backend/logs
mkdir -p /app/dormitory-management/frontend/logs

# Create logrotate config
sudo tee /etc/logrotate.d/dormitory > /dev/null << 'LOGROTATE'
/app/dormitory-management/*/logs/*.log {
    daily
    rotate 7
    compress
    delaycompress
    notifempty
    create 0640 ubuntu ubuntu
}
LOGROTATE

echo "✅ Log rotation configured"
