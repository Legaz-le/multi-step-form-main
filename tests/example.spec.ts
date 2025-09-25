import { test, expect, type Page } from "@playwright/test";

const TODO_ITEMS = [
  "buy some cheese",
  "abylaikhan@gmail.com",
  "+77571353081",
] as const;

const REQUIRED_FIELDS = [
  { label: "Name", value: TODO_ITEMS[0] },
  { label: "Email Address", value: TODO_ITEMS[1] },
  { label: "Phone Number", value: TODO_ITEMS[2] },
];

const INVALID_EMAIL = [
  "@Clearout.io",
  "John.doesocialfrontier.com",
  "MaryLopez12@.com",
];

const INVALID_PHONE_NUMBER = ["+31fgf6464w54", "1-555-555-1212", "+5464654"];

async function goToForm(page: Page) {
  await page.goto("http://localhost:5173");
}

async function Button(page: Page) {
  await page.getByRole("button", { name: "Next Step" }).click();
}

interface RequiredField {
  label: string;
  value: string;
}

async function runInvalidFieldTests(
  fieldLabel: string,
  invalidValues: string[],
  errorMessage: string
): Promise<void> {
  for (const field of invalidValues) {
    test(`invalid ${fieldLabel} ${field}`, async ({ page }: { page: Page }) => {
      await goToForm(page);
      for (const value of REQUIRED_FIELDS as RequiredField[]) {
        if (fieldLabel !== value.label) {
          await page.getByLabel(value.label).fill(value.value);
        } else {
          await page.getByLabel(value.label).fill(field);
        }
      }
      await Button(page);
      const errors = page.locator(`text=${errorMessage}`);
      await expect(errors.first()).toBeVisible();
    });
  }
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

      await Button(page);

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

test.describe("invalid value", () => {
  runInvalidFieldTests(
    "Email Address",
    INVALID_EMAIL,
    "Please enter a valid email address"
  );
  runInvalidFieldTests(
    "Phone Number",
    INVALID_PHONE_NUMBER,
    "Please enter a valid phone number"
  );
});
