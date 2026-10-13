# UI Automation with Playwright

## Project Overview

This project is a basic UI test automation project created using Playwright and JavaScript.

The purpose of the project is to automate selected user flows of the Practice Software Testing e-commerce application and demonstrate basic UI automation skills.

The project focuses on simple and maintainable test scenarios suitable for a junior QA portfolio.

---

## Automated Test Scenarios

The following scenarios were automated:

### Login

- Login with valid credentials
- Login with invalid password

### Product Search

- Search for an existing product
- Search for a non-existing product

### Shopping Cart

- Search for a product
- Open the product detail page
- Add the product to the shopping cart
- Verify the product is displayed in the cart

### Product Detail

- Search for an existing product
- Open the product detail page
- Verify the product name
- Verify the product price is displayed
- Verify the Add to Cart button is visible

---

## Tools and Technologies

- Playwright
- JavaScript
- Node.js
- npm
- Google Chrome / Chromium
- Visual Studio Code
- Git
- GitHub

---

## Project Structure

```text
ui-automation-playwright
│
├── tests
│   ├── login.spec.js
│   ├── search.spec.js
│   ├── cart.spec.js
│   └── product-detail.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Run All Tests:

npx playwright test

## Run Test Using Chromium:

npx playwright test --project=chromium

## Run tests in headed mode:

npx playwright test --project=chromium --headed

## Run a specific test file:

npx playwright test tests/login.spec.js --project=chromium

---

## Test Results

The project currently includes 6 automated UI test scenarios.

All implemented scenarios were successfully executed using Chromium.


## Locator Strategy

The tests use simple Playwright locator strategies such as:

getByRole()
getByLabel()
getByText()
locator() with data-test attributes

Where possible, stable data-test attributes and accessible element roles are preferred.


## Project Status

Completed

This project demonstrates basic UI test automation skills using Playwright and JavaScript.
