import { rest } from "msw";
import { setupServer } from "msw/node";

/**
 * Mock Service Worker のハンドラー
 *
 * テストで使用する API のモックを定義する。
 * ここで定義したモックは、テスト全体で有効になる。
 * テスト個別にモックを定義したい場合は、テスト内で `server.use()` を使用する。
 */
const handlers = [
  rest.get("https://example.com", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Hello World" }));
  }),
];

/**
 * Mock Service Worker のサーバー
 */
const server = setupServer(...handlers);

export { server };
