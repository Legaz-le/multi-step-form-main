import { test, expect } from "@playwright/test";

import {
  REQUIRED_FIELDS,
  INVALID_EMAIL,
  INVALID_PHONE_NUMBER,
} from "./test.data";

import { addOnsData } from "../src/data/data";
import {
  goToForm,
  runInvalidFieldTests,
  fillRequiredFields,
  goToPlanStep,
  selectPlan,
  selectAddOn,
  confirmForm,
  expectStepHeading,
} from "./helpers";

test.beforeEach(async ({ page }) => {
  await goToForm(page);
});

test("complete multi-step form and reach Thank You page", async ({ page }) => {
  await goToPlanStep(page);
  await selectPlan(page, "Arcade");
  await selectAddOn(page, "Online service");
  await confirmForm(page);
  await expectStepHeading(page, "Thank you");
});

// Validation test

// test.describe.only("Required Fields Validation", () => {
//   for (const field of REQUIRED_FIELDS) {
//     test(`shows error when ${field.label} is empty`, async ({ page }) => {
//       for (const f of REQUIRED_FIELDS) {
//         if (f.label !== field.label) {
//           await page.getByLabel(f.label).fill(f.value);
//         }
//       }
//       await page.getByRole("button", { name: "Next Step" }).click();
//       const errors = page.locator("text=This field is required");
//       await expect(errors).toHaveCount(1);
//       await expect(errors.first()).toBeVisible();
//     });
//   }

//   test("shows errors for all required fields when nothing is filled", async ({
//     page,
//   }) => {
//     await goToForm(page);
//     await page.getByRole("button", { name: "Next Step" }).click();
//     const errors = page.locator("text=This field is required");
//     await expect(errors).toHaveCount(REQUIRED_FIELDS.length);
//     for (let i = 0; i < REQUIRED_FIELDS.length; i++) {
//       await expect(errors.nth(i)).toBeVisible();
//     }
//   });
// });

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

// Navigation

test("Check input value kept after clicking back button", async ({ page }) => {
  await goToPlanStep(page);
  await page.getByRole("button", { name: "Go Back" }).click();
  for (const value of REQUIRED_FIELDS) {
    await expect(page.getByLabel(value.label)).toHaveValue(value.value);
  }
});

test("Double click Next Step button", async ({ page }) => {
  await fillRequiredFields(page);
  await page.getByRole("button", { name: "Next Step" }).dblclick();
  await expectStepHeading(page, "Select your plan");
});

// Data Integrity

test("check plan is shown in confirm page", async ({ page }) => {
  await goToPlanStep(page);
  await selectPlan(page, "Arcade");
  await selectAddOn(page, "Online service");
  await expect(page.getByRole("heading", { name: "Arcade" })).toBeVisible();
});

test("select and unselect add-ons", async ({ page }) => {
  await goToPlanStep(page);
  await selectPlan(page, "Arcade");

  for (const addons of addOnsData) {
    const checkbox = page.getByLabel(addons.title);

    await checkbox.check({ force: true });
    await expect(checkbox).toBeChecked();

    await checkbox.uncheck({ force: true });
    await expect(checkbox).not.toBeChecked();
  }
});

test("Check toggle button", async ({ page }) => {
  await goToPlanStep(page);

  await page.getByText("Arcade").click();
  await page.click('label[for="hs-basic-usage"]');
  await expect(page.getByText("Yearly", { exact: true })).toHaveClass(
    /text-Blue-950/
  );
});

// UI State

test("Next step is disabled until inputs are valid", async ({ page }) => {
  expect(page.getByRole("button", { name: "Next Step" })).toBeDisabled();
  await fillRequiredFields(page);
  await page.getByRole("button", { name: "Next Step" }).click();
});

test("Heading visible at each step", async ({ page }) => {
  await expectStepHeading(page, "Personal info");
  await goToPlanStep(page);

  await expectStepHeading(page, "Select your plan");
  await selectPlan(page, "Arcade");

  await expectStepHeading(page, "Pick add-ons");
  await selectAddOn(page, "Online service");

  await expectStepHeading(page, "Finishing up");
});

// Accessibility

test.only("Navigate via Tab/Enter only", async ({ page }) => {
  for (const field of REQUIRED_FIELDS) {
    await page.getByLabel(field.label).focus();
    await page.keyboard.type(field.value);
    await page.keyboard.press("Tab");
  }
  await page.getByRole("button", { name: "Next Step" }).focus();
  await page.getByRole("button", { name: "Next Step" }).press("Enter");
  await expectStepHeading(page, "Select your plan");
});
