# ITPM Assignment 1 - Option 1

This repository contains an automated test suite using [Playwright](https://playwright.dev/) and Node.js.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (which comes with `npm`)

## Installation

Follow these steps to install the necessary dependencies:

1. Open a terminal and navigate to the root directory of the project.
2. Install the Node.js dependencies (this includes Playwright and `xlsx` for Excel file handling):
   ```bash
   npm install
   ```
3. Install the required Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running the Tests

To execute the test suite, you can run the following command in your terminal:

```bash
npm test
```
*(Alternatively, you can run `npx playwright test`)*

### Additional Test Commands

- **Run tests in UI mode:**
  ```bash
  npx playwright test --ui
  ```
- **Run tests with a visible browser (headed mode):**
  ```bash
  npx playwright test --headed
  ```
- **View test report after running tests:**
  ```bash
  npx playwright show-report
  ```
