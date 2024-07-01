# Fat Cat Coders Full Stack Homework Assignment

This is a TypeScript app that showcases some basic React components. The goal was to refactor JavaScript to TypeScript, create a List component, create a CreateForm component for generating forms, and create a DynamicPage component for generating pages.

## Packages Used

-   **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
-   **ESLint**: A tool for identifying and fixing problems in JavaScript code.
-   **React Query**: A powerful data-fetching library for React, enabling server-state management.
-   **Yup**: A JavaScript schema builder for value parsing and validation.
-   **Formik**: A library for building forms in React with ease.
-   **Axios**: A promise-based HTTP client for making requests to a server.
-   **clsx**: A utility for constructing `className` strings conditionally.
-   **Prettier**: An opinionated code formatter.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Vite**: A fast development build tool that also supports modern JavaScript features.

## Getting Started

### Installation

To run the project, install the necessary packages using npm or yarn:

```bash
npm install
```

or

```bash
yarn add
```

### Running the Project

After installing the packages, start the development server:

```bash
npm run start
```

or

```bash
yarn run start
```

This will start Vite, which will transpile TypeScript and run the project on `http://localhost:3000`.

## Features

### List

The `List` component is styled using Tailwind CSS and leverages React Query to fetch and display data. The logic for fetching list data is encapsulated in the `useGetList.ts` custom hook. Additionally, the `axios.ts` file in the `utils/` directory defines an Axios interceptor to manage network requests.

Within `List.tsx`, the component handles the display of list data, as well as the `isLoading` and `isError` states, providing appropriate feedback to users during data fetching and error conditions.

### Create Form

The `CreateForm` component, defined in `CreateForm.tsx`, dynamically generates a form based on its children and a provided validation schema. It supports handling mutations that are executed upon form submission. This component integrates with `Formik` to return a Formik object, facilitating form validation for individual fields. React Query is utilized to manage mutations efficiently.

### Dynamic Page

The `DynamicPage` component, defined in `DynamicPage.tsx`, allows for the generation of dynamic pages. By passing an array of objects, the component can create a layout and populate it with the specified components. This approach streamlines the process of page creation, enabling faster and easier development of complex page structures.

> **NOTE: All of these components are implemented in TestPage.tsx.**

## Project Structure

-   **Components Folder**: Defines all components.
-   **Pages Folder**: Defines all Pages.
-   **Hooks Folder**: Defines custom hooks(handling API requests).
-   **Types Folder**: Defines various types used throughout the project.
-   **Utils Folder**: Contains `axios.ts`, which defines an Axios interceptor for handling network requests.
-   **App.tsx**: Defines the app entry point.
-   **.eslintrc.cjs**: Defines ESLint rules and configuration.
-   **.prettierrc.cjs**: Defines Prettier configuration.
-   **globals.d.ts**: Defines global variables and types.

## Author

**Marko Karapandžić**

-   **Email**: karapandzicmarko1
-   **GitHub**: [markokarapandzic](https://github.com/markokarapandzic)
