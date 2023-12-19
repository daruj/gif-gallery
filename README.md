# Project Name

## Overview

This project is a React application built with Create React App and TypeScript. It incorporates various features and best practices to enhance code quality, maintainability, and user experience.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Open folder in terminal

   ```bash
   cd gif-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

If you want to run the tests, please run `npm test`

## Project Structure

The project is organized into the following folders:

- **api**: Contains API-related files and configurations.
- **assets**: Includes static assets like images, fonts, etc.
- **components**: Houses React components.
- **hooks**: Custom React hooks.
- **pages**: Top-level pages or views.
- **test-data**: Data used for testing purposes.
- **types**: TypeScript type definitions.
- **utils**: Utility functions and helpers.

## Code Quality

- **Prettier**: Used for code formatting.
- **ESLint**: Code linting to ensure consistent coding standards.
- **Lint-Staged**: Runs ESLint on staged files before commit.

## Node Version

The project specifies a Node version using `.nvmrc` and the `engines` property in `package.json`.

## Absolute Paths

Absolute paths are implemented for easier imports throughout the project.

## Styling

- **SCSS**: Styling language for enhanced CSS.
- **Scoped Sass Files**: Scoped styling for components.
- **Global.scss**: Global styling with variables.

## Features

1. **Infinite Scroll**: Implemented using React-Query with an intersection observer hook and debounce for optimal performance.

2. **Search GIF**: Utilizes a debounce hook to prevent unnecessary requests and enhance user experience.

3. **Lazy Loading Images**: Implemented a library for lazy loading images with a pleasing animation and a placeholder for improved initial page loading, especially on slow connections.

4. **Refetch Function**: Includes a refetch function to allow users to manually refresh content.

5. **Error Handling**: A user-friendly link is provided on the page to prompt users to try refetching in case of an error.

6. **Unit Testing**: Includes unit tests for API requests and utility functions.

7. **Image Hover Animation**: Animated display of image title and label on hover for improved UX.

8. **Responsive Design**: Ensures the application is fully responsive across various devices.

## Code Quality

- **Prettier**: Used for code formatting.
- **ESLint**: Code linting to ensure consistent coding standards.
- **Lint-Staged**: Runs ESLint and Prettier on staged files before commit.

## Node Version

The project specifies a Node version using `.nvmrc` and the `engines` property in `package.json`.

## Suggestions for Testing

- Test lazy loading with slow network connections for a realistic experience.
- Explore image hover animation on different devices for optimal responsiveness.
- Resize the page and see how it looks in different resolutions.
- In case of an error, use the provided link to try refetching and ensure error handling is effective.
