# Stone Currency Converter - Frontend Challenge

All the instructions, architecture and decisions about the project can be found below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its library, React.

## Dependencies

- [TypeScript](https://www.typescriptlang.org/): it types the code at runtime
- [Axios](https://github.com/axios/axios): used to access APIs, it gives you the ability to take advantage of JavaScript's _async_ and _await_ for more readable asynchronous code.
- [Styled Components](https://styled-components.com/): it optimizes the styling experience for React components.

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│  ├── favicon.ico
│  └── index.html
├── src
│  ├── assets
│  │  ├── icons
│  │  │  ├── arrow-left.svg
│  │  │  └── convert.svg
│  │  └── images
│  │     ├── background.png
│  │     ├── graph.png
│  │     └── logo.png
│  ├── components
│  │  ├── Header
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  └── Input
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── helpers
│  │  └── format-number.ts
│  ├── pages
│  │  └── Home
│  │     ├── ConversionResult
│  │     │  ├── index.tsx
│  │     │  └── styles.ts
│  │     ├── Form
│  │     │  ├── index.tsx
│  │     │  └── styles.ts
│  │     ├── home.hook.ts
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── styles
│  │  └── GlobalStyles.ts
│  ├── App.tsx
│  ├── index.tsx
│  ├── react-app-env.d.ts
│  └── types.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the homepage and that can be reusable
- **helpers**: utility functions
- **pages**: application screens and hooks
- **styles**: global styles to be used in the entire application

The project is visually structured by only one page, which is the Homepage. The initial interface shows two fields to be filled: the amount of dollar the user wants to purchase or simply convert and the state fee.

Below that, there are two radio buttons to choose between paying with money or credit card, since the fee is different for those two.

And last, there's a convert button, which calculates the currency from dollar to BRL and redirects the user to a different screen, controlled by react useState. At the result screen, there's also a back button so the user can simply return to the initial state and make another conversion.

As it isn't a considerably large application, the state could be controlled by using only _React Hooks_.

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/stone-currency

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/stone-currency.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
