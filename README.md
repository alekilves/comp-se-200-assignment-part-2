## COMP.SE.200-2024-2025-1 Software Testing Assignment Part 2

This repository contains the implementation for Part 2 of the COMP.SE.200 Software Testing assignment, focusing on executing tests and measuring test coverage using **c8** and **Jest**.

---

### Project Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

### Running Tests

#### Run Jest Tests
To execute all tests:
```bash
npm test
```

#### Run Tests with Coverage
To run all tests and measure coverage using `c8`:
```bash
npm run coverage
```

---

### Tools Used

#### c8
- **Purpose**: Measures test coverage for JavaScript projects.
- **Integration**: Works with Jest to generate detailed coverage reports in formats such as `text` and `HTML`.
- **How It Works**: Wraps the test runner (Jest) and tracks which parts of the code are executed during the test suite run.

#### Jest
- **Purpose**: Unit testing framework for JavaScript, particularly suited for React applications.
- **Usage**: Runs tests for both utility functions and React components.

---

### Scripts

The following scripts are available in the `package.json` file:

- **Run Tests**:
  ```bash
  npm test
  ```
  Executes the test suite using Jest.

- **Run Tests with Coverage**:
  ```bash
  npm run coverage
  ```
  Runs the test suite and generates a coverage report using `c8`.

---

### Coverage Reporting

#### How to Generate Reports
1. Run the coverage command:
   ```bash
   npm run coverage
   ```

2. Coverage reports will be displayed in the terminal and saved as an HTML file in the `coverage/` directory.

#### Example Output
- **Terminal Summary**:
  ```plaintext
  ----------|---------|----------|---------|---------|-------------------
  File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
  ----------|---------|----------|---------|---------|-------------------
  All files |   95.24 |       90 |      100 |      95 |                 
  ----------|---------|----------|---------|---------|-------------------
  ```

- **HTML Report**:
  Open the file `coverage/index.html` in a browser to view a detailed report.

---

### GitHub Actions Integration

The testing and coverage process is automated using **GitHub Actions**. On every push or pull request to the `main` branch:

1. Jest tests are executed.
2. Coverage is measured with `c8`.
3. The test and coverage results are displayed in the GitHub Actions logs and uploaded to Coveralls.

---

### Workflow Configuration

The `.github/workflows/ci.yml` file automates the testing process. Key steps include:

1. **Checkout Code**:
   ```yaml
   - name: Checkout code
     uses: actions/checkout@v3
   ```

2. **Set Up Node.js**:
   ```yaml
   - name: Set up Node.js
     uses: actions/setup-node@v3
     with:
       node-version: 14
   ```

3. **Install Dependencies**:
   ```yaml
   - name: Install dependencies
     run: npm install
   ```

4. **Run Tests with Coverage**:
   ```yaml
   - name: Run tests with coverage
     run: npm run coverage
   ```

5. **Upload Coverage to Coveralls**:
   ```yaml
   - name: Upload coverage to Coveralls
     env:
       COVERALLS_REPO_TOKEN: ${{ secrets.COVERALLS_REPO_TOKEN }}
     run: cat ./coverage/lcov.info | coveralls
   ```

---

### Coverage Badge

[![Coverage Status](https://coveralls.io/repos/github/alekilves/comp-se-200-assignment-part-2/badge.svg?branch=main)](https://coveralls.io/github/alekilves/comp-se-200-assignment-part-2?branch=main)



---

### Known Limitations

- Test coverage for third-party APIs and integrations is not included, as these are outside the scope of this assignment.
- The checkout functionality is excluded from testing due to its implementation by a third-party service.

---

