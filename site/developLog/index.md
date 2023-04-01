# 这是组件库的开发日志

## 基础环境搭建

技术选择：
- vue3 + typescript + vite 
- eslint + prettier + husky + commitlint
- vitest

## 1 项目搭建
```shell
pnpm init 
pnpm add typescript eslint prettier @mistjs/eslint-config-vue -D
```

初始化一个.gitignore
```
node_modules
.vscode
.DS_Store
dist
```

## 2 配置eslint
创建一个.eslintrc.json，继承下规则
```json
{
  "extends": "@mistjs/eslint-config-vue"
}
```

然后vscode记得安装eslint插件

## 3 ts配置
安装下ts的配置项，
```shell
pnpm @mistjs/tsconfig-vue -D
```
继承下配置项
```json
{
  "extends": "@mistjs/tsconfig-vue"
}
```

也可以安装下node脚本
```shell
pnpm add @types/node -D
```

## 4 安装vitest
```shell
pnpm add vitest vite -D
```

写一个test试下，注意文件夹名称tests
demo.test.ts
```ts
import { describe, expect, it } from 'vitest'

describe('demo', (): void => {
  it('should pass', () => {
    expect(1).toBe(1)
  })
})
```

script 添加一条命令
```json
{
  "scripts": {
    "test": "vitest",
    // ...
  }
}
```

vscode 有好用的插件 vitest run

## 5 husky + commitlint 规范提交
安装husky + commitlint
```shell
pnpm add @commitlint/cli @commitlint/config-conventional husky -D
```

配置规则
.commitlintrc
```json
{
  "extends": [
    "@commitlint/config-conventional"
  ],
  "rules": {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "test",
        "build",
        "docs",
        "chore"
      ]
    ],
    "subject-max-length": [1, "always", 150]
  }
}
```

通过husky创建钩子，在commit前检查
```shell
pnpm exec husky add .husky/commit-msg "pnpm exec commitlint -e \"$1\""
```

## 6 代码提交规范错误检查 lint-staged
```shell
pnpm add lint-staged -D
```

配置package.json
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,vue}": "eslint --fix"
  },
}
```

commit 前执行钩子 lint-staged
husky创建钩子
```shell
pnpm exec husky add ./husky/pre-commit "pnpm exec lint-staged"
```

## 7 搭建vitepress的文档
```shell
pnpm add vitepress -D
```
如果有警告，去viterpress的官网看下去除方法

根目录下创建一个site站点
```json
{
  "dev": "vitepress dev site",
  "build:site": "vitepress build site",
  "preview": "vitepress preview site"
}
```
