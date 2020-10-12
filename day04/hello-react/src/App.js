/* Day-5 exercise: Use classnames library to compute classes in Box component
Add property ‘dashed’  so that the box border can be dashed
Experiment nesting of Boxes by ensuring to supply different sizes for different boxes 
 */
import './App.css';

//import Box from './Box';
import React from 'react';
import Counter from './Counter';

function App() {
    return (
        // <div className="App">
        //     <Box dashed className="ThickBorder" style={{ color: "blue"}}>
        //         <div>
        //             <Box className="NestedBox">
        //             </Box>  
        //         </div>
        //     </Box>
        // </div>
        <div className="App">
            <Counter></Counter>
        </div>
    );
}

export default App;
