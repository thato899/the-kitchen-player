#!/usr/bin/env bash
set -euo pipefail

GITHUB_USERNAME="${1:-}"
REPO_NAME="${2:-the-kitchen-player}"

echo "== The Kitchen Player WSL/Linux setup =="
echo "Node detected: $(node --version)"

if [ ! -f ".env.local" ]; then
  cp .env.example .env.local
  echo "Created .env.local from .env.example"
else
  echo ".env.local already exists"
fi

echo "Installing dependencies..."
npm install

echo "Running project checks..."
npm run lint
npm run typecheck
npm run test
npm run build

if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

if [ -n "$(git status --short)" ]; then
  git add .
  git commit -m "Setup The Kitchen Player project"
else
  echo "Git working tree is clean"
fi

echo ""
echo "Next terminal commands:"
echo "npm run dev"

if [ -n "$GITHUB_USERNAME" ]; then
  echo "git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
  echo "git push -u origin main"
else
  echo "Create a GitHub repo named '$REPO_NAME', then run:"
  echo "git remote add origin https://github.com/YOUR_USERNAME/$REPO_NAME.git"
  echo "git push -u origin main"
fi
