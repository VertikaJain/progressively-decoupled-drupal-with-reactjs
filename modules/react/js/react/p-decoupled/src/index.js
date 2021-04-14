import React from 'react';
import { render } from 'react-dom';
import './index.css';
import regeneratorRuntime from 'regenerator-runtime'
import App from "./App"

const Root = () => {
 return (
   <>
   <h1>This is Demo of Progressively Decoupled Drupal with React !</h1>
   <App/>
   </>
 )
}
 
render(<Root/>, document.getElementById('react-ecommerce-app'));