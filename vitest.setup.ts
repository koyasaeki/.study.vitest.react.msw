import { afterAll, afterEach, beforeAll, beforeEach } from "vitest";
import { server } from "./src/tests/server";

/**
 * beforeAll
 *
 * 全てのテスト実行前にやりたい処理を書く。
 */
beforeAll(() => {
  server.listen({
    /**
     * 対応するリクエストハンドラがない場合の挙動を指定する。
     * "error" は現在のプロセスの `stderr` にエラーを出力する。
     */
    onUnhandledRequest: "error",
  });
});

/**
 * beforeAll
 *
 * 各コンテキストのテスト実行前にやりたい処理を書く。
 * top-level でテストを書いている場合はファイル単位、
 * それ以外は describe 単位がコンテキストになる。
 */
beforeEach(() => {});

/**
 * afterEach
 *
 * 各コンテキストのテスト実行後にやりたい処理を書く。
 * top-level でテストを書いている場合はファイル単位、
 * それ以外は describe 単位がコンテキストになる。
 */
afterEach(() => {
  server.resetHandlers();
});

/**
 * afterEach
 *
 * 全てのテスト実行後にやりたい処理を書く。
 */
afterAll(() => {
  server.close();
});
