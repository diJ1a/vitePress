---
# layout: doc, page, and home.
layout: doc

title: 添加Git Bash终端
---
**VS Code版本: 1.70.2**

## 问题描述

明明安装了`git`,想在VS Code运行`Git-Bash`终端，发现没有`Git-Bash`终端怎么办？

## 问题解决
修改 `setting.json`，配置中添加以下代码
```json
   "terminal.integrated.profiles.windows": {
     "Git-Bash": {
       // 此处修改为你的bash.exe地址
       "path": "D:\\Program Files\\Git\\bin\\bash.exe",
       "args": []
     }
   }
```
保存`setting.json`，重启VS Code 即可

## 其他
若上述方法无法解决，可将`git`安装在默认地址(`C:\Program Files\Git`)，VS Code会自动添加`Git Bash`终端