# An E-Commerce site using Progressively Decoupled Drupal (PDD) with ReactJS
*Progressively Decoupled Drupal is embedding ReactJS inside a Drupal module. Drupal controls some of the render to provide markup within a single application. JavaScript (ReactJS in my case) then takes over client-side rendering.*

## Technology Stack
1. Drupal 9 for backend
2. ReactJS for frontend
3. MAMP for server setup

## Setup using this Repository
1. Install Drupal 9 and node.
2. For setting up of the server using MAMP and database setup in Drupal, go through the steps in my [Decoupled Drupal Repository](https://github.com/VertikaJain/decoupled-drupal-react/blob/master/README.md).
3. Download this repository and copy into /Applications/MAMP/htdocs/
4. In terminal open the folder of this application -> /Applications/MAMP/htdocs/drupal/modules/react/js/react/p-decoupled
5. Install all packages first using this command - ` npm install ` or ` npm i `
6. Once webpack and bable are working, run this command - ` npm run build `. This should create a bundle of your application.
7. Make sure the URL path that you provide in the Drupal console is the same path you use in **fetch()** method of Products component.
8. Open your drupal site home page to view all content.

## Setting up of PDD with React from Scratch

### Creating a custom module
1. Create a new folder in /modules (custom module) -> react
2. Create 3 files with the required details
  - react.info.yml 
  - react.libraries.yml
  - react.routing.yml
3. Create src folder in /modules/react and add a Controller file (ReactContoller.php) that initiates the markup of React.

### Front end setup (ReactJS code)
1. Create a js/react/p-decoupled/ folder in /modules/react for frontend code.
2. Go to /modules/react/js/react/p-decoupled folder in terminal and run command ` npm init `. This will create a package.json file.
3. Here, we do **NOT** use `npx create-react-app` in order to avoid unnecessary files and modules. Therefore we use **webpack** and **babel** for setting up react in our application.
4. You can refer to my [package.json](https://github.com/VertikaJain/progressively-decoupled-drupal-with-reactjs/blob/master/modules/react/js/react/p-decoupled/package.json) file to install dependencies and dev dependencies for webpack and babel.
5. Add the following script to your package.json
` "build": "NODE_ENV=production webpack" `
6. Create a webpack.config.js file in /p-decoupled folder and add the following code-
```
const path = require('path');
const config = {
 entry: './src/index.js',
 devtool: (process.env.NODE_ENV === 'production') ? false : 'inline-source-map',
 mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'app.bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /(node_modules)/,
       use: {
         loader: 'babel-loader'
       }
     }
   ]
 },
};
module.exports = config;
```
7. Create a src folder in /p-decoupled folder with index.js as the entry point to react.
8. From here on you can create your react Components to display the data that are called through index.js (App.js usually).
9. In order to get data from drupal content, make use of the URL you provided while creating the View. (/drupal/api/v1/products in my example).

**Note:** We do not need to make use of CORs and the complete path of drupal here because we are not changing the domain in an Embedded Application.

### Setting up of CSS in Drupal from Scratch
1. Download and install css-loader library using ` npm i css-loader `
2. Create your index.css file in /modules/react/js/react/p-decoupled/src with the required styling.
3. Update the webpack.config.js file by adding ` { test: /\.css$/, use: 'css-loader' } ` to rules array.
4. Update react.libraries.yml file by adding 
``` 
css:
    layout:
      js/react/p-decoupled/src/index.css: {}
```
5. Lastly, import your index.css file in src/index.js 
` import './index.css'; ` 
