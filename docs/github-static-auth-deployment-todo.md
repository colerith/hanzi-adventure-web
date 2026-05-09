# GitHub 静态网页账号系统部署待办（可打勾）

> 目标：把当前演示级静态版，升级为生产级安全版（OAuth + 后端鉴权 + 可控管理员权限 + 可审计数据同步）。

## A. 先决策（5 分钟）

- [x] 我确认前端继续部署在 GitHub Pages。
- [x] 我确认后端平台选型：Cloudflare Workers。
- [x] 我确认数据库选型：Supabase。
- [x] 我确认管理员账号白名单（GitHub login 列表）：colerith。

## B. 仓库与域名

- [x] 准备两个仓库（推荐）：
  - 前端：`hanzi-adventure-web`
  - 后端：`hanzi-adventure-api`
- [x] 在前端仓库开启 GitHub Pages。

## C. GitHub OAuth App（必须）

- [ ] 在 GitHub Developer Settings 创建 OAuth App。
- [ ] Homepage URL 设为前端地址，例如：`https://<user>.github.io/<repo>/`
- [ ] Authorization callback URL 设为后端回调地址，例如：
  - Cloudflare: `https://<worker-domain>/auth/github/callback`
  - Vercel: `https://<vercel-domain>/api/auth/github/callback`
- [ ] 记录 `GITHUB_CLIENT_ID`。
- [ ] 记录 `GITHUB_CLIENT_SECRET`（仅后端保存，前端绝不能出现）。

## D. 后端最小接口清单（必须）

- [ ] `GET /auth/github/start`：重定向到 GitHub OAuth。
- [ ] `GET /auth/github/callback`：处理 code，签发会话 Cookie。
- [ ] `GET /auth/me`：返回当前登录用户与角色。
- [ ] `POST /admin/reset-scores`：管理员清空成绩。
- [ ] `POST /admin/sync-repo`：管理员触发同步排行榜到仓库。
- [ ] `GET /leaderboard`：返回排行榜。
- [ ] `GET /me/records`：返回当前用户历史成绩。

## E. 会话与安全（关键）

- [ ] 会话使用 HttpOnly + Secure + SameSite Cookie。
- [ ] Cookie 不存敏感原始 token，只存短期会话 ID。
- [ ] 后端保存会话到 KV/Redis/D1（设置过期时间）。
- [ ] 所有管理接口在后端校验管理员角色。
- [ ] 管理员角色来源：后端白名单（GitHub login），不是前端判断。
- [ ] 增加 CORS 白名单，仅允许你的 GitHub Pages 域。
- [ ] 对管理接口做速率限制（rate limit）。

## F. 数据模型（建议）

- [ ] users
  - id, github_id, username, display_name, avatar_url, role, created_at
- [ ] scores
  - id, user_id, game, score, duration, created_at
- [ ] sync_logs
  - id, actor_user_id, target_repo, status, message, created_at

## G. 前端对接改造（当前项目）

- [ ] 登录按钮改为跳转 `/auth/github/start`（而不是只输入用户名）。
- [ ] 页面初始化先请求 `/auth/me`，拿用户和角色。
- [ ] 提交成绩时调用后端接口（不要直接写本地 localStorage 为主数据源）。
- [ ] 排行榜页面改为请求 `/leaderboard`。
- [ ] 用户中心改为请求 `/me/records`。
- [ ] 管理员页按钮改为请求 `/admin/*` 接口。

## H. GitHub Pages 自动部署（前端）

- [ ] 添加 `.github/workflows/deploy-pages.yml`。
- [ ] 触发条件：push 到 main。
- [ ] 步骤：install -> build -> upload artifact -> deploy。
- [ ] 验证页面可访问，路由可用（当前已使用 hash 路由）。

## I. 仓库同步（后端执行）

- [ ] 后端配置 GitHub Token 或 GitHub App 安装令牌。
- [ ] 同步逻辑在后端执行 commit（记录 sync_logs）。
- [ ] 前端仅触发请求，不接触密钥。

## J. 验收清单（上线前）

- [ ] 未登录用户无法访问管理接口。
- [ ] 普通用户访问管理接口返回 403。
- [ ] 管理员可重置成绩并可同步仓库。
- [ ] 刷新页面后登录状态有效（会话未过期）。
- [ ] 所有密钥只在后端环境变量中。
- [ ] 网络面板确认前端请求无敏感 token 泄露。

## K. 常见问题排查

- [ ] 回调失败：检查 OAuth callback URL 是否与后端路由完全一致。
- [ ] 登录后丢失状态：检查 Cookie 的 SameSite/Secure/Domain。
- [ ] 跨域报错：检查后端 CORS 白名单与前端 origin。
- [ ] 管理员不生效：检查后端白名单是否使用 GitHub login（区分大小写时统一 lower-case）。
- [ ] GitHub 同步失败：检查 Token 权限（repo contents write）。

## L. 你可以随时问我的节点

- [ ] “帮我生成 Cloudflare Workers 的 OAuth 后端模板”
- [ ] “帮我把当前前端从本地存储改成 API 数据源”
- [ ] “帮我生成 GitHub Actions 的 pages 部署工作流”
- [ ] “帮我做一份本地到线上联调清单”
