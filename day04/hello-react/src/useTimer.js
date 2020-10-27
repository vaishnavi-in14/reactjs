import {useState} from 'react';
//import { readFromStorage, writeToStorage } from './LocalStorage';

//const INTERVAL = 'Interval';
let interval = null;
export function useTimer() {
    let [time, setTime] = useState(0);
    
    function start() {
        interval = setInterval(() => {
            setTime(time => time + 1);       
        }, 1000);
        //writeToStorage(INTERVAL, interval);
        //return interval;
    };

    function pause() {
        //let interval = readFromStorage(INTERVAL);
        clearInterval(interval);
    }

    function reset() {
        setTime(0);
    }

    return [time, start, pause, reset];

}
