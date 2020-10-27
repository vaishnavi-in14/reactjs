/* Day-5 exercise: Use classnames library to compute classes in Box component
Add property ‘dashed’  so that the box border can be dashed
Experiment nesting of Boxes by ensuring to supply different sizes for different boxes 
 */
import './App.css';
import React from 'react';

import Login from './Login';
//import Timer from './Timer';

function App() {
    return (
       /*  <Timer></Timer> */
       <div className="App">
            <Login>
            </Login>
        </div>
    );
}

export default App;
