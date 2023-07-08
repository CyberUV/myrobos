import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div >
   <App/>
    </div>
{/* <Hello greet={'hello ' + 'this.prop property is here '+ 'it is use to get the value'}/> */}
    
  </React.StrictMode>
);



reportWebVitals();
