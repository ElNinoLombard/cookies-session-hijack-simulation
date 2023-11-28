# Session Management in React Application

This project demonstrates the implementation of secure session and cookie mechanisms in a React application to manage user sessions.

## Overview

The goal of this project is to showcase how session management can be achieved in a frontend application using React. It includes functionalities such as:

- Storing session data using `localStorage`.
- Setting and removing secure HttpOnly cookies using `js-cookie`.
- Simulating session hijacking to demonstrate security measures.

## Features

- **Session Management:** Utilizes `localStorage` to store and retrieve session data.
- **Cookie Security:** Sets secure HttpOnly cookies to manage user sessions.
- **Simulation:** Simulates a session hijack attempt for testing purposes.

## Usage

1. **Installation:** Clone the repository and install dependencies using `npm install`.

2. **Run the Application:** Start the React application by running `npm start`.

3. **Test Session and Cookies:**
   - Navigate to the test page to interact with the session functionalities.
   - Click "Login" to simulate a user login and set session data.
   - Click "Logout" to clear session data.
   - Use "Simulate Hijacking" to test unauthorized access to session data.

## File Structure

cookies-session/
├── src/
│ ├── components/
│ │ ├── SessionTestPage.js
│ │ └── ... (other components)
│ ├── utils/
│ │ └── SessionManager.js
│ ├── App.js
│ └── index.js
└── package.json


## Dependencies

- `React`: Frontend library for building user interfaces.
- `js-cookie`: Library for handling browser cookies in JavaScript.

## Notes

This project focuses on frontend implementation. Comprehensive security assessment might require backend testing for complete session security evaluation.

Pour toute question ou clarification supplémentaire, veuillez me contacter à [maxime.lombard@live.com.mx].
