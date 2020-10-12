import './Counter.css';

import React, { useState } from 'react';

const Counter = () => {
    // let [count, setCount] = useState(0);
    // let [multiplier, setMultiplier] = useState(5);
    let [data, setData] = useState({count: 0, multiplier: 4});
    return (
        <div className="Counter">
            <button 
                onClick={() => {
                    data.count = data.count - 1;
                    console.log('- clicked', data.count);
                    setData(data);
                }}
            >
                -
            </button>
            <div className="Label">{data.count * data.multiplier}</div>
            <button
                onClick={() => {
                    data.count = data.count + 1;
                    console.log('+ clicked', data.count);
                    setData(data);
                }}
            >
                +
            </button>
            <div className="Multiplier">
                <label htmlFor="multiplier">Multiplier</label>
                <input 
                    onChange={(event) => {
                        console.log(event.target.value);
                        data.multiplier = Number(event.target.value);
                        setData(data);
                    }}
                    type="text" 
                    id="multiplier" 
                    name="multiplier"
                    defaultValue={data.multiplier}
                />
            </div>
        </div>
    )
}

export default Counter;