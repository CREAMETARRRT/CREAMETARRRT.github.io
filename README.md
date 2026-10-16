# 奶油蛋挞 / CREAM TART 静态网站

这是一个为 GitHub Pages 准备的 Jekyll 静态网站。不需要服务器，不需要 Ghost 订阅。长期成本可以只剩域名费。

## 1. 最快上线（约 10 分钟）

1. 注册 / 登录 GitHub。
2. **最推荐：**新建一个 Public repository，仓库名直接写成 `你的GitHub用户名.github.io`。这样网站天然就在根目录，后面绑独立域名也最省事。
3. 把这个文件夹里的所有文件上传到仓库根目录。
4. 在仓库里打开 **Settings → Pages**。
5. `Build and deployment` 选择 **Deploy from a branch**。
6. Branch 选择 `main`，Folder 选择 `/ (root)`，保存。
7. 等 1–3 分钟，GitHub 会给你一个免费网址：`https://你的用户名.github.io/`

> 如果你坚持把仓库命名为 `cream-tart` 这类项目名，请把 `_config.yml` 里的 `baseurl: ""` 改成 `baseurl: "/cream-tart"`。绑定独立域名后再改回空字符串。

## 2. 绑定自己的域名

先购买域名。然后在 **Settings → Pages → Custom domain** 填入你的域名。
GitHub 会告诉你要在域名注册商里添加哪些 DNS 记录。

绑定成功后建议勾选 **Enforce HTTPS**。

## 3. 发一篇新文章

进入 `_posts` 文件夹，新建：

`2026-10-16-my-new-post.md`

内容复制这个模板：

```md
---
layout: post
title: "文章标题"
deck: "一句话副标题"
date: 2026-10-16 20:00:00 +0800
categories: [screenings]
category: SCREENINGS
author: "奶油蛋挞编辑部"
location: "Hangzhou"
---

这里开始写正文。

> 这是引用。

## 这是小标题

继续写正文。
```

栏目对应：
- `screenings` → 放映 / 映后 / 导演交流
- `festivals` → 电影节 / 市场 / 现场记录
- `writing` → 影评 / 策展文章 / 随笔

## 4. 图片怎么放

建议新建目录：

`assets/images/文章短名/`

例如：

`assets/images/busan-2026/01.jpg`

Markdown 里写：

```md
![釜山电影殿堂](/assets/images/busan-2026/01.jpg)
```

## 5. 修改网站名字 / 简介

编辑 `_config.yml`。

## 6. 修改导航

编辑 `_data/navigation.yml`。

## 7. 修改 About

编辑 `about/index.md`。

## 8. 当前已经做好的内容

- 响应式手机 / 电脑版
- LATEST 首页
- SCREENINGS 栏目
- FESTIVALS 栏目
- WRITING 栏目
- ABOUT 页面
- 中文长文排版
- 引用样式
- 移动端菜单
- Open Graph 基础信息
- 保留 `/screenings001/` URL 的第一篇迁移示例

## 9. 上线前建议删除 / 修改

- `_posts/2026-10-14-busan-field-notes.md` 是示例占位文章
- `_posts/2026-10-10-why-screenings-matter.md` 是示例占位文章
- `about/index.md` 里的邮箱
- `_config.yml` 里的作者名
- 第一篇文章中的占位正文

## 10. 为什么这个方案基本只花域名费

GitHub Pages 可以免费构建和托管这个网站。文章本身都是 Markdown 文本，图片和代码也都存在你的 GitHub 仓库里，所以即使以后换平台，也不会像 Ghost 停订后那样担心内容被平台删除。
