import React from 'react';
import { render } from 'react-dom';
import regeneratorRuntime from 'regenerator-runtime'
import App from "./App"

const Root = () => {
 return (
   <>
   <h1>Hi there, this is Progressively Decoupled Drupal with React Demo !</h1>
   <App/>
   </>
 )
}
 
render(<Root/>, document.getElementById('react-ecommerce-app'));