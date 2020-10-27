/* Day-6: Add the following props to Counter component with PropTypes support:
const Counter = ({counterBase, upperLimit, lowerLimit})
Implement a login component
When you tap login button, the
User name and password should
Be displayed below the login
button
 */


import './Counter.css';

import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const Counter = ({ counterBase, upperLimit, lowerLimit, counterCallback }) => {
    //let [count, setCount] = useState(0);
    
    // let [multiplier, setMultiplier] = useState(5);
    let [data, setData] = useState({count: 0, multiplier: 4});
    console.log(data);

    return (
        <div className="Counter">
            <button 
                onClick={() => {
                    data.count = data.count - 1;
                    console.log('- clicked', data.count);
                    setData({...data, count: data.count});
                    console.log(data);
                }}
            >
                -
            </button>
            <div className="Label">{data.count * data.multiplier}</div>
            <button
                onClick={() => {
                    data.count = data.count + 1;
                    console.log('+ clicked', data.count);
                    setData({...data, count: data.count});
                    counterCallback && counterCallback(count);
                    console.log(data);
                }}
            >
                +
            </button>
            <div className="Multiplier">
                <label htmlFor="multiplier">Multiplier</label>
                <input 
                    onChange={(event) => {
                        console.log(event.target.value);
                        let newData = {...data, multiplier: event.target.value}
                        setData(newData);
                    }}
                    type="text" 
                    id="multiplier" 
                    name="multiplier"
                    defaultValue={data.multiplier}
                />
            </div>
        </div>
    );
};

Counter.propTypes = {
    counterCallback: PropTypes.func,
    counterBase: PropTypes.number.isRequired,
};

export default Counter;