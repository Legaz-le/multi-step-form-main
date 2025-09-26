import { test, expect, type Page } from "@playwright/test";

import {
  REQUIRED_FIELDS,
} from "./test.data";

interface RequiredField {
  label: string;
  value: string;
}

export async function goToForm(page: Page) {
  await page.goto("http://localhost:5173");
}

export async function Button(page: Page) {
  await page.getByRole("button", { name: "Next Step" }).click();
}

export async function FillingInputs(page: Page) {
  for (const value of REQUIRED_FIELDS) {
    await page.getByLabel(value.label).fill(value.value);
  }
}

export async function runInvalidFieldTests(
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
