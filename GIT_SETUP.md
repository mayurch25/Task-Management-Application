# Git Setup Instructions

## Step 1: Initialize Git (if not already done)
```bash
cd /Users/ranium/Desktop/backendtest
git init
```

## Step 2: Add all files to staging
```bash
git add .
```

## Step 3: Make your first commit
```bash
git commit -m "Initial commit: Task management application"
```

## Step 4: Add your remote repository
```bash
# Replace <your-username> and <repo-name> with your actual GitHub username and repository name
git remote add origin https://github.com/<your-username>/<repo-name>.git
```

## Step 5: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Alternative: If you already have a repository URL
```bash
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

