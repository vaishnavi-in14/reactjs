/* Day-9: Re implement Timer component there using functional component
Add buttons to reset, start, and pause the timer.
Can you think of implementing a custom hook, which can help control a time interval object - such as creating, resetting, pausing and starting it?
 */

// import { resetWarningCache } from 'prop-types';
import React from 'react';

//import { readFromStorage, writeToStorage } from './LocalStorage';
import './Timer.css';
import {useTimer} from './useTimer';

//const INTERVAL = 'Interval';

const Timer = () => {
    let [time, start, pause, reset] = useTimer();
   /*  useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);       
        }, 1000);
        return () => clearInterval(interval);
    }, []); */

    return (
        <div className= "Timer">
            Timer: {time}
            <br/>
            <br/>
            <div>
                {/* <button  
                    className="Button"
                    onClick={() => {
                        setTime(0);
                    }}    
                > 
                    Reset
                </button>
                
                <button  
                    className="Button"
                    onClick={() => {
                        let interval = setInterval(() => {
                        setTime(time => time + 1);       
                        }, 1000);
                        writeToStorage(INTERVAL, interval);
                    }}
                >
                    Start
                </button>
            
                <button  
                    className="Button"
                    onClick={() => {
                        let interval = readFromStorage(INTERVAL);
                        clearInterval(interval);
                    }}
                >
                    Pause
                </button> */}
                <button className="Button" onClick={reset}>
                    Reset
                </button>
                <button className="Button" onClick={start}>
                    Start
                </button>
                <button className="Button" onClick={pause}>
                    Pause
                </button>
            </div>
        </div>
    )
 }

 export default Timer;