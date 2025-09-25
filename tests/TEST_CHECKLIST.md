# Multi-Step Form Test Checklist

This checklist helps track which test cases are covered for the multi-step form.

| **Category**          | **Case**                                                                 | **Expected Behavior**                                                      | **Status** |
|------------------------|--------------------------------------------------------------------------|----------------------------------------------------------------------------|------------|
| **Happy Path**         | Fill valid inputs → go through all steps → reach “Thank you” page        | User successfully completes form, reaches final confirmation               | ✅ Covered |
| **Validation**         | Leave Name, Email, or Phone empty → click Next                          | Error message shown, cannot proceed                                         | ⬜ Missing |
|                        | Invalid email format (e.g., `abc@`)                                      | Error message shown, cannot proceed                                         | ⬜ Missing |
|                        | Invalid phone (letters/symbols)                                          | Error message shown, cannot proceed                                         | ⬜ Missing |
| **Navigation**         | Click Back button                                                       | Returns to previous step, previously entered data still visible             | ⬜ Missing |
|                        | Double click “Next Step”                                                | Moves only one step forward, no skip                                       | ⬜ Missing |
| **Data Integrity**     | Select plan “Arcade” → check summary                                    | Summary correctly shows “Arcade”                                           | ⬜ Missing |
|                        | Select/unselect add-ons                                                 | Confirm page updates correctly                                              | ⬜ Missing |
|                        | Monthly vs Yearly plan toggle                                            | Total price updates correctly                                               | ⬜ Missing |
| **UI State**           | “Next Step” disabled until inputs valid                                 | Button is disabled until required fields are valid                          | ⬜ Missing |
|                        | Headings visible at each step                                           | Correct step heading always visible                                         | ✅ Covered |
|                        | “Thank you” page only after final confirm                               | Not accessible earlier                                                      | ✅ Covered |
| **Accessibility**      | All fields have labels (test via `getByLabel`)                          | Accessible names match visible labels                                       | ✅ Covered |
|                        | Navigate via Tab/Enter only                                             | Form is fully usable with keyboard                                          | ⬜ Missing |
|                        | Error messages announced with screen readers (if `aria-live` is used)   | Screen readers announce errors                                              | ⬜ Missing |
| **Edge Cases**         | Refresh in middle of form                                               | Progress resets OR persists (depending on requirements)                     | ⬜ Missing |
|                        | Resize to mobile viewport                                               | Layout still usable, no hidden/overlapping elements                         | ⬜ Missing |
| **Performance**        | Form load time                                                          | Page loads quickly, no unnecessary delays                                   | ⬜ Missing |
|                        | Flakiness in multiple test runs                                         | Tests pass consistently without random fails                                | ⬜ Missing |
