import React from 'react';
import ReactDOM from 'react-dom/client';
// import Card from './Card';
import {Robodata} from './Robodata'
import CardList from './CardList';

import './index.css';
// import Hello from './Hello.js';
import 'tachyons';
// import App from './App';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    
    {/* To Make this whole bunch of code to to clean we will use CardList */}
     <CardList Robodata={ Robodata } />

    
    </div>
    
    

{/* <Hello greet={'hello ' + 'this.prop property is here '+ 'it is use to get the value'}/> */}
    
  </React.StrictMode>
);



reportWebVitals();
