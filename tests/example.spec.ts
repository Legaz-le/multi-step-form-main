import { test, expect, type Page } from "@playwright/test";

const TODO_ITEMS = [
  "buy some cheese",
  "abylaikhan@gmail.com",
  "+775781568",
] as const;

const REQUIRED_FIELDS = [
  { label: "Name", value: TODO_ITEMS[0] },
  { label: "Email Address", value: TODO_ITEMS[1] },
  { label: "Phone Number", value: TODO_ITEMS[2] },
];

async function goToForm(page: Page) {
  await page.goto("http://localhost:5173");
}

async function Button(page: Page) {
  await page.getByRole("button", { name: "Next Step" }).click();
}

test("complete multi-step form and reach Thank You page", async ({ page }) => {
  await goToForm(page);

  for (const value of REQUIRED_FIELDS) {
    if (value.label === value.label) {
      await page.getByLabel(value.label).fill(value.value);
    }
  }
  await Button(page);

  await page.getByText("Arcade").click();
  await Button(page);

  await page.getByText("Online service").click();
  await Button(page);

  await page.getByRole("button", { name: "Confirm" }).click();
  await expect(page.getByRole("heading", { name: "Thank you" })).toBeVisible();
});

// Validation test

test.describe("Required Fields Validation", () => {
  for (const field of REQUIRED_FIELDS) {
    test(`shows error when ${field.label} is empty`, async ({ page }) => {
      await goToForm(page);

      for (const f of REQUIRED_FIELDS) {
        if (f.label !== field.label) {
          await page.getByLabel(f.label).fill(f.value);
        }
      }

      await page.getByRole("button", { name: "Next Step" }).click();

      const errors = page.locator("text=This field is required");
      await expect(errors).toHaveCount(1);
      await expect(errors.first()).toBeVisible();
    });
  }

  test("shows errors for all required fields when nothing is filled", async ({
    page,
  }) => {
    await goToForm(page);

    await page.getByRole("button", { name: "Next Step" }).click();

    const errors = page.locator("text=This field is required");

    await expect(errors).toHaveCount(REQUIRED_FIELDS.length);

    for (let i = 0; i < REQUIRED_FIELDS.length; i++) {
      await expect(errors.nth(i)).toBeVisible();
    }
  });
});
