# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install` to install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Gestion de session dans une application React

Ce projet démontre l'implémentation de mécanismes de session et de cookies sécurisés dans une application React pour gérer les sessions utilisateur.

## Aperçu

L'objectif de ce projet est de présenter comment la gestion de session peut être réalisée dans une application frontend utilisant React. Il inclut des fonctionnalités telles que :

- Stockage des données de session en utilisant `localStorage`.
- Définition et suppression de cookies sécurisés HttpOnly en utilisant `js-cookie`.
- Simulation de tentative de détournement de session pour démontrer les mesures de sécurité.

## Fonctionnalités

- **Gestion de session :** Utilisation de `localStorage` pour stocker et récupérer les données de session.
- **Sécurité des cookies :** Configuration de cookies sécurisés HttpOnly pour gérer les sessions utilisateur.
- **Simulation :** Simule une tentative de détournement de session à des fins de test.

## Utilisation

1. **Installation :** Clonez le dépôt et installez les dépendances en utilisant `npm install`.

2. **Lancer l'application :** Démarrez l'application React en exécutant `npm start`.

3. **Tester les sessions et les cookies :**
   - Accédez à la page de test pour interagir avec les fonctionnalités de session.
   - Cliquez sur "Login" pour simuler une connexion utilisateur et définir des données de session.
   - Cliquez sur "Logout" pour effacer les données de session.
   - Utilisez "Simuler un détournement" pour tester l'accès non autorisé aux données de session.

## Structure des fichiers

cookies-session/
├── src/
│ ├── components/
│ │ ├── SessionTestPage.js
│ │ └── ... (autres composants)
│ ├── utils/
│ │ └── SessionManager.js
│ ├── App.js
│ └── index.js
└── package.json


## Dépendances

- `React` : Bibliothèque frontend pour la création d'interfaces utilisateur.
- `js-cookie` : Bibliothèque pour la manipulation de cookies navigateur en JavaScript.

## Remarques

Ce projet se concentre sur l'implémentation frontend. Une évaluation de sécurité complète pourrait nécessiter des tests backend pour une évaluation complète de la sécurité des sessions.


Pour toute question ou clarification supplémentaire, veuillez me contacter à [maxime.lombard@live.com.mx].

