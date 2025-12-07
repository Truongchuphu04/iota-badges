#!/bin/bash

# Auto-restart dev server if it crashes
cd /home/truong_204/iota-badges/community

echo "🚀 Starting IOTA Community Badges Dev Server..."
echo "📍 URL: http://localhost:3000"
echo "⏹️  Press Ctrl+C to stop"
echo ""

while true; do
  npm run dev
  echo "❌ Server crashed or stopped. Restarting in 5 seconds..."
  sleep 5
done
