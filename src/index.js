import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@cloudscape-design/global-styles/index.css"

import '@aws-amplify/ui-react/styles.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


