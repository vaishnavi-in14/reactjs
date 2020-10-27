/* Day-8: Support storing the visible state of the Counter component via the App component.  
Hint: Use JSON.stringify, and JSON.parse   serialisation/deserialisation,  to avoid issues of wrong 
interpretation of a boolean as string 
Add a button to clear the local storage for the flag in the App component. Disable it if there is 
no entry in the local storage for the flag of the counter yet.
 */

import './Counter.css';

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { readFromStorage, writeToStorage } from './LocalStorage';

const COUNT = 'Count';

const Counter2 = ({ counterBase, upperLimit, lowerLimit, counterCallback }) => {

    let [count, setCount] = useState(() => Number(readFromStorage(COUNT)) || 0); //useState(readFromStorage(COUNT) || 0);

    let [multiplier, setMultiplier] = useState(5);
    //let [data, setData] = useState({ count: 0, multiplier: 1 });

    useEffect(() => {
        console.log('* Component is rendered');
        return () => {
            console.log('component is unmounted');
        };
    }, []);

    return (
        <div className="Counter">
            <button
                onClick={() => {
                    count = count - 1;
                    console.log('- clicked: ' + count);

                    // setData({ ...data, count: data.count });
                    setCount(count);
                    writeToStorage(COUNT, count);
                    counterCallback && counterCallback(count);
                }}
            >
                -
            </button>
            <div className="Label">{count * multiplier}</div>
            <button
                onClick={() => {
                    count = count + 1;
                    console.log('+ clicked', count);
                    setCount(count);
                    writeToStorage(COUNT, count);
                    counterCallback && counterCallback(count);
                }}
            >
                +
            </button>
            <br/>
            <div className="Multiplier">
                <label htmlFor="multiplier">Multiplier</label>
                <input
                    onChange={(event) => {
                        console.dir(event.target.value);
                        setMultiplier(Number(event.target.value));
                    }}
                    type="text"
                    id="multiplier"
                    name="multiplier"
                    defaultValue={multiplier}
                />
            </div>
        </div>
    );
};

Counter2.propTypes = {
    counterCallback: PropTypes.func,
    counterBase: PropTypes.number.isRequired,
};

export default Counter2;
