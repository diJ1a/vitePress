#!/usr/bin/env sh

# 1. 打开控制台，并切换到 git bash
# 2. 输入 ./deploy.sh 回车

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

#删除已有.git文件夹
rm -rf .git
echo delete .git
git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f https://github.com/diJ1a/blog.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages