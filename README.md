# Food Delivery App

A modern food delivery application implemented using React, TypeScript, Vite, and Firebase Authentication service.

## Design Prototype

The design prototype for the Food Delivery App can be viewed on Figma:  
[Food Delivery App - Figma Design](https://www.figma.com/design/Mtg8ZbQ8ePQjfRYSycJLBX/Food-Delivery-UI---Free--Copy-?node-id=4-881&t=6mxMqQskch84qLPn-0)

Live URL: https://food-store-iion.vercel.app/login

> **Notes**:
>
> - New users can sign up and log in and access the home page.
> - The "Logout" feature and "Keep me logged in" functionality are not implemented. A page refresh will sign the user out.
> - Responsiveness is handled, but it is recommended to refresh the page before switching device modes.

## Features Implemented

- **Signup/Sign-in Page**:

  - Allows users to create a new account by providing their details.
  - Enables users to log in to their existing accounts.

- **Home Page**:

  - Displays featured ads for users to view.
  - Lists restaurants for users to browse.
  - Provides filtering options to narrow down restaurants based on desired criteria.

  ## Features Not Implemented

  - **Forgot Password**:

    - Functionality to reset the password for users who have forgotten it.

  - **Logout**:

    - Option for users to securely log out of their accounts.

  - **Search Item**:

    - A search bar to allow users to find specific items or restaurants.

  - **Navbar Menus**:
    - A fully functional navigation bar with menus for easy access to different sections of the app.

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to the URL provided in the terminal.

## How to Build

1. Build the project for production:

```bash
npm run build
```

2. The built files will be available in the `dist` directory.

3. Serve the `dist` directory using any static file server or deploy it to your hosting provider.
