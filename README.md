# UNESCO Heritage Sites in Tamil Nadu - Interactive Guide

An interactive web application showcasing the UNESCO World Heritage sites in Tamil Nadu, India. This guide allows users to explore these significant cultural and historical landmarks through an easy-to-use interface.

## Features

*   **Interactive Site List:** Displays UNESCO World Heritage sites in Tamil Nadu with images and brief descriptions.
*   **Detailed Information:** Provides a detailed view for each site, including comprehensive descriptions, high-quality images, key architectural elements or specific locations within the site, and geographical coordinates.
*   **Search Functionality:** Allows users to easily filter sites by name or keywords present in their descriptions.
*   **Interactive Map View:** Integrates Leaflet.js to display site locations on an interactive map. Users can click on map markers to get more information.
*   **Image Lazy Loading:** Implements lazy loading for images to optimize initial page load time and improve performance.
*   **Responsive Design:** The application is designed to be responsive and accessible on various devices, including desktops, tablets, and mobile phones. (Note: This is based on common web development practices; thorough testing across multiple devices is recommended.)
*   **User-Friendly Navigation:** Simple navigation to switch between home view (site listings) and map view.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for exploration or development purposes.

### Prerequisites

*   A modern web browser such as Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge.
*   (Optional) Git, for cloning the repository.
*   (Optional) Python or Node.js, for running a simple local web server.

### Installation

1.  **Clone the repository (Recommended):**
    If you have Git installed, open your terminal and run:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```
    (Replace `https://github.com/your-username/your-repository-name.git` with the actual URL of this repository once it's hosted on GitHub or a similar platform.)

2.  **Download the ZIP file:**
    Alternatively, you can download the project files as a ZIP archive from the repository page and extract them to a folder on your computer.

### Running the Project

This project consists of static HTML, CSS, and JavaScript files. You can run it in a couple of ways:

1.  **Directly opening `index.html` (Simplest):**
    Navigate to the project's root folder and open the `index.html` file in your web browser.
    *Note: Some browser features or map tile loading might behave differently when opened directly from the filesystem (file:// protocol) compared to being served via HTTP/S. For full compatibility, using a local server is recommended.*

2.  **Using a Local Web Server (Recommended for full functionality):**
    Serving the files through a local web server ensures that all features work as expected (e.g., AJAX requests for local data if any were used, correct base URLs, and avoiding potential CORS issues with some resources if they were loaded from external domains not configured for direct file access).

    *   **Using Python:**
        If you have Python installed, open your terminal in the project's root directory and run:
        *   For Python 3: `python -m http.server`
        *   For Python 2: `python -m SimpleHTTPServer`
        Then, open your browser and go to `http://localhost:8000`.

    *   **Using Node.js (with `serve`):**
        If you have Node.js and npm installed, you can use the `serve` package.
        Open your terminal in the project's root directory and run:
        ```bash
        npx serve
        ```
        It will typically serve the content on `http://localhost:3000` (the command output will show the exact address).

    *   **Using VS Code Live Server Extension:**
        If you are using Visual Studio Code, you can install the "Live Server" extension. Once installed, right-click on the `index.html` file in the VS Code explorer and select "Open with Live Server."

## Usage Examples

Once the project is running, you can:

*   **Browse Sites:** Scroll through the list of heritage sites displayed on the homepage. Each card shows an image, name, and a short description.
*   **View Site Details:** Click the "Learn More" button on any site card. A modal window will pop up, displaying detailed information, a larger image, and geographical coordinates.
*   **Search for Sites:** Use the search bar at the top of the page to type in keywords (e.g., "Chola", "temple", "railway"). The list of sites will dynamically filter to show matching results.
*   **Explore Map View:** Click on the "Map View" link in the navigation bar. This will display an interactive map with markers indicating the locations of the heritage sites. Click on any marker to see a brief info pop-up with a "Learn More" button that links to the detailed modal.
*   **Navigate:** Use the "Home" and "Map View" links to switch between the site listing and the map.

## Bug Scanning and Fixing

To ensure the application works correctly and to identify potential issues:

### Manual Testing

*   **Content Accuracy:** Verify that the names, descriptions, images, and coordinates for each heritage site are correct.
*   **Image Loading:** Check that all images load correctly, both on initial page load (for visible items) and as users scroll (lazy loading). Ensure fallback or error states for images are handled gracefully if an image fails to load.
*   **Search Functionality:** Test the search with various terms, including partial matches, full names, and keywords from descriptions. Ensure "No results" messages appear when appropriate.
*   **Map Interaction:** Confirm that the map loads, markers are placed correctly, and pop-ups on markers function as expected.
*   **Modal Functionality:** Ensure that the "Learn More" modals open with the correct information, display correctly, and can be closed easily (via the close button or by clicking the overlay).
*   **Responsiveness:** Test the application on different screen sizes (desktop, tablet, mobile) to check for layout issues or broken functionality. Browser developer tools can simulate different devices.
*   **Browser Compatibility:** Test on different web browsers (Chrome, Firefox, Safari, Edge) to catch browser-specific issues.
*   **Console Errors:** Open the browser's developer tools (usually by pressing F12) and check the console for any JavaScript errors or failed network requests.

### Automated Tools (Future Enhancements)

For a more robust testing strategy, consider incorporating the following:

*   **Linters:**
    *   **ESLint:** For analyzing JavaScript code to find problematic patterns or code that doesn’t adhere to style guidelines.
    *   **Stylelint:** For linting CSS to avoid errors and enforce consistent conventions.
    *   **Prettier:** For automatic code formatting to ensure consistency.
*   **Automated Testing:**
    *   **Unit Tests (e.g., with Jest, Mocha, Jasmine):** To test individual JavaScript functions or components in isolation (e.g., the search filtering logic, coordinate parsing).
    *   **Integration Tests:** To test interactions between different parts of the application (e.g., ensuring the map updates correctly when a filter is applied).
    *   **End-to-End (E2E) Tests (e.g., with Cypress, Playwright, Selenium):** To simulate user scenarios across the entire application in a real browser environment.

## CI/CD Pipeline Setup (Industry Best Practices)

Continuous Integration (CI) and Continuous Deployment/Delivery (CD) can automate the process of testing and deploying your project.

### Conceptual Overview

*   **Continuous Integration (CI):** Automatically building and testing your code every time a change is pushed to the repository. This helps catch bugs early.
*   **Continuous Deployment (CD):** Automatically deploying the application to a staging or production environment after it passes all CI checks.

### Recommended Tools

*   **GitHub Actions:** Free for public repositories and well-integrated with GitHub. Excellent for automating workflows.
*   **GitLab CI/CD:** Powerful and integrated if your project is hosted on GitLab.
*   **Jenkins:** A flexible, open-source automation server that can be self-hosted.

### Basic CI Pipeline Steps (Example with GitHub Actions)

A `.github/workflows/main.yml` file could define the following:

```yaml
name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3

    - name: Set up Node.js (if using linters/tools that require it)
      uses: actions/setup-node@v3
      with:
        node-version: '18' # Or your preferred version

    # Example: Install dependencies if you have a package.json
    # - name: Install dependencies
    #   run: npm install

    - name: Run Linters (Example - add specific linting commands)
      run: |
        echo "Add ESLint command here if configured"
        # npm run lint:js
        echo "Add Stylelint command here if configured"
        # npm run lint:css

    # Example: Run tests (if you have automated tests)
    # - name: Run tests
    #   run: npm test

    - name: Validate HTML (Optional - Example using w3c-html-validator)
      uses: W3C-Validator/html-validator-action@v1
      with:
        html_filename: 'index.html' # Or a list of HTML files
        # You might need to install dependencies for the validator or use a specific version.
```

### Basic CD Pipeline Steps (Example: Deploying to GitHub Pages)

GitHub Actions can also be used to deploy the static site to GitHub Pages.

1.  **Enable GitHub Pages:** In your repository settings, under the "Pages" section, choose the branch and folder to deploy (e.g., `main` branch, `/ (root)` folder).

2.  **Workflow for Deployment:** You can extend the CI workflow or create a new one for deployment. A common practice is to deploy on pushes to the `main` branch.

```yaml
# (Add to the existing main.yml or a new deploy.yml)
# ... (previous CI steps) ...

  deploy_to_gh_pages:
    needs: build_and_test # Ensures CI passes before deploying
    if: github.ref == 'refs/heads/main' && github.event_name == 'push' # Only run on push to main
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./ # Assuming index.html is in the root
          # publish_branch: gh-pages # Optional: deploy to a gh-pages branch
```

### Best Practices for CI/CD

*   **Commit Frequently:** Make small, incremental commits with clear messages.
*   **Feature Branches:** Develop new features or fixes in separate branches and merge them via Pull Requests.
*   **Automate Testing:** Write tests for your code (unit, integration, E2E) and run them automatically in the CI pipeline.
*   **Code Quality Checks:** Integrate linters and static analysis tools.
*   **Secure Secrets:** Store any API keys, tokens, or sensitive information using your CI/CD tool's secrets management (e.g., GitHub Secrets).
*   **Monitor Deployments:** Keep an eye on deployments for any issues.
*   **Infrastructure as Code (IaC):** For more complex applications, define your infrastructure (servers, databases) in code. (Less relevant for this static site but good to know).

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add new features, please follow these steps:

1.  **Fork the Repository:** Click the "Fork" button at the top right of the repository page.
2.  **Create a New Branch:**
    ```bash
    git checkout -b feature/YourAmazingFeature
    ```
    Or for bug fixes:
    ```bash
    git checkout -b bugfix/IssueDescription
    ```
3.  **Make Your Changes:** Implement your feature or fix the bug.
4.  **Test Your Changes:** Ensure your changes work as expected and do not break existing functionality.
5.  **Commit Your Changes:** Write clear and concise commit messages.
    ```bash
    git commit -m "Add: Implement YourAmazingFeature"
    # or
    git commit -m "Fix: Resolve IssueDescription"
    ```
6.  **Push to Your Branch:**
    ```bash
    git push origin feature/YourAmazingFeature
    ```
7.  **Open a Pull Request (PR):** Go to the original repository on GitHub and click the "New pull request" button. Provide a clear description of your changes in the PR.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
(Note: Ensure a `LICENSE` file with the MIT License text exists in the repository.)
