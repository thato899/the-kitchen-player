param(
  [string]$GithubUsername = "",
  [string]$RepoName = "the-kitchen-player"
)

$ErrorActionPreference = "Stop"

Write-Host "== The Kitchen Player terminal setup ==" -ForegroundColor Cyan

$nodeVersion = node --version
Write-Host "Node detected: $nodeVersion"

if (-not (Test-Path ".env.local")) {
  Copy-Item ".env.example" ".env.local"
  Write-Host "Created .env.local from .env.example"
} else {
  Write-Host ".env.local already exists"
}

Write-Host "Installing dependencies..."
npm install

Write-Host "Running project checks..."
npm run lint
npm run typecheck
npm run test
npm run build

if (-not (Test-Path ".git")) {
  git init
  git branch -M main
}

$status = git status --short
if ($status) {
  git add .
  git commit -m "Setup The Kitchen Player project"
} else {
  Write-Host "Git working tree is clean"
}

Write-Host ""
Write-Host "Next terminal commands:" -ForegroundColor Green
Write-Host "npm run dev"

if ($GithubUsername) {
  Write-Host "git remote add origin https://github.com/$GithubUsername/$RepoName.git"
  Write-Host "git push -u origin main"
} else {
  Write-Host "Create a GitHub repo named '$RepoName', then run:"
  Write-Host "git remote add origin https://github.com/YOUR_USERNAME/$RepoName.git"
  Write-Host "git push -u origin main"
}
