import { test, expect, type Page } from "@playwright/test";

const TODO_ITEMS = [
  "buy some cheese",
  "abylaikhan@gmail.com",
  "+775781568",
] as const;

async function goToPlanStep(page: Page) {
  await page.goto("http://localhost:5173");

  await page.getByLabel("Name").fill(TODO_ITEMS[0]);
  await page.getByLabel("Email Address").fill(TODO_ITEMS[1]);
  await page.getByLabel("Phone Number").fill(TODO_ITEMS[2]);

  await page.getByRole("button", { name: "Next Step" }).click();
}

async function goToAddOnStep(page: Page) {
  await goToPlanStep(page);

  await page.getByText("Arcade").click();

  await page.getByRole("button", { name: "Next Step" }).click();
}

async function goToConfrimStep(page: Page) {
  await goToPlanStep(page);
  await goToAddOnStep(page);
  await expect(
    page.getByRole("heading", { name: "Pick add-ons" })
  ).toBeVisible();

  await page.getByText("Online service").click();
  await page.getByRole("button", { name: "Next Step" }).click();
}

test("fill the first inputs", async ({ page }) => {
  await goToPlanStep(page);

  await expect(
    page.getByRole("heading", { name: "Select your plan" })
  ).toBeVisible();
});

test("choose plan", async ({ page }) => {
  await goToAddOnStep(page);
  await expect(
    page.getByRole("heading", { name: "Pick add-ons" })
  ).toBeVisible();
});

test("adds-ons section additional services", async ({ page }) => {
  await goToConfrimStep(page);
  await expect(
    page.getByRole("heading", { name: "Finishing up" })
  ).toBeVisible();
});

test("Confrim last page", async({page})=> {
  await goToConfrimStep(page);
  await page.getByRole("button", { name: "Next Step" }).click();
   await expect(
    page.getByRole("heading", { name: "Thank you" })
  ).toBeVisible();
})
