import { test, expect } from "@playwright/test";

test.describe("認証のテスト", () => {
  test("ログインを行い、ユーザー名が表示される", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.click("text=Log In");

    await page.fill("#username", "user1@sample.com");
    await page.fill("#password", "ay964wYGWSeY4n");
    await page.click('button[type="submit"]');

    // ページ上に何らかのテキストが表示されることを期待する。
    await expect(page.locator("text=user1@sample.com").first()).toBeVisible();
  });
});
