# Multi-Step Form

A **React-based multi-step form** with validation, add-ons selection, plan toggle, and confirmation page. This form is designed to be **accessible**, **responsive**, and **fast-loading**, and it includes a comprehensive **Playwright test suite**.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Technology Stack](#technology-stack)  
3. [Setup Instructions](#setup-instructions)  
4. [Project Structure](#project-structure)  
5. [Features](#features)  
6. [Testing](#testing)  
7. [How to Contribute](#how-to-contribute)  
8. [Known Issues / TODOs](#known-issues--todos)  

---

## Project Overview

The Multi-Step Form allows users to:

- Enter personal information (name, email, phone)  
- Select a plan (monthly or yearly)  
- Pick optional add-ons  
- Confirm choices on a final "Thank You" page  

The form includes validation for required fields and invalid inputs, accessibility support (screen readers, keyboard navigation), and responsive design for mobile devices.

---

## Technology Stack

- **Frontend:** React, Tailwind CSS  
- **Form Handling:** react-hook-form  
- **State Management:** Context API  
- **Testing:** Playwright  
- **Data / Utils:** Local data files, validation rules  

---

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/your-repo.git
cd your-repo
Install dependencies:

npm install
Run the development server:


npm run dev
Open the app in your browser at http://localhost:5173.

Run tests:


npx playwright test
Project Structure

/src
  /components        # Reusable React components
    /common          # Shared UI components
    /form-steps      # Step-specific components (Step1, Step2, etc.)
  /context           # Context API for form state
  /data              # Form data and options
  /utils             # Helper functions, validation rules

/tests                # Playwright test files
Features
Multi-step form: 4+ steps from personal info to confirmation

Validation: Required fields, invalid email/phone detection

Add-ons & Plan selection: Toggle monthly/yearly plans and optional services

Responsive design: Works on mobile and desktop

Accessibility: ARIA attributes, keyboard navigation, screen reader support

Performance: Loads under 1 second

Testing
Test Suite Overview
Tests are implemented with Playwright and cover:

Happy Path: Fill valid inputs → reach “Thank You” page

Validation: Required fields, invalid email, invalid phone

Navigation: Back button, double-click Next Step

Data Integrity: Plan selection, add-ons toggle, monthly/yearly toggle

UI State: Next Step disabled until inputs valid, headings visible

Accessibility: Keyboard navigation, screen reader error announcements

Edge Cases: Refresh mid-form, mobile viewport

Performance: Page load under 1 second

Run Tests

npx playwright test
To run a specific test:

npx playwright test tests/example.spec.ts --grep "Error messages announced with screen readers"
Test results are printed in the terminal, and you can generate HTML reports:

npx playwright show-report