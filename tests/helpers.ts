import { test, expect, type Page } from "@playwright/test";

import { REQUIRED_FIELDS } from "./test.data";

interface RequiredField {
  label: string;
  value: string;
}
export async function goToForm(page: Page) {
  await page.goto("http://localhost:5173");
}

export async function fillRequiredFields(page: Page) {
  for (const field of REQUIRED_FIELDS) {
    await page.getByLabel(field.label).fill(field.value);
  }
}

export async function goToPlanStep(page: Page) {
  await fillRequiredFields(page);
  await page.getByRole("button", { name: "Next Step" }).click();
}

export async function selectPlan(page: Page, planName: string) {
  await page.getByText(planName).click();
  await page.getByRole("button", { name: "Next Step" }).click();
}

export async function selectAddOn(page: Page, addOnName: string) {
  await page.getByLabel(addOnName).check({ force: true });
  await page.getByRole("button", { name: "Next Step" }).click();
}

export async function confirmForm(page: Page) {
  await page.getByRole("button", { name: "Confirm" }).click();
}

export async function expectStepHeading(page: Page, heading: string) {
  await expect(page.getByRole("heading", { name: heading })).toBeVisible();
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
      await page.getByRole("button", { name: "Next Step" }).click();
      const errors = page.locator(`text=${errorMessage}`);
      await expect(errors.first()).toBeVisible();
    });
  }
}
