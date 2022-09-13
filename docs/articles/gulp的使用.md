# 构建选项 {#build-options}

## build.target {#build-target}
在安装了 Vite 的项目中，可以在 npm scripts 中使用 vite 可执行文件，或者直接使用 npx vite 运行它。下面是通过脚手架创建的 Vite 项目中默认的 npm scripts：

{
  "scripts": {
    "dev": "vite", // 启动开发服务器，别名：`vite dev`，`vite serve`
    "build": "vite build", // 为生产环境构建产物
    "preview": "vite preview" // 本地预览生产构建产物
  }
}
可以指定额外的命令行选项，如 --port 或 --https。运行 npx vite --help 获得完整的命令行选项列表。

## build.polyfillModulePreload {#build-polyfillmodulepreload}
如果你迫不及待想要体验最新的功能，可以自行克隆 vite 仓库 到本地机器上然后自行将其链接（将需要 pnpm）：

git clone https://github.com/vitejs/vite.git
cd vite
pnpm install
cd packages/vite
pnpm run build
pnpm link --global # you can use your preferred package manager for this step
然后，回到你的 Vite 项目并运行 pnpm link --global vite（或者使用你的其他包管理工具来全局链接 vite）。重新启动开发服务器来体验新功能吧！