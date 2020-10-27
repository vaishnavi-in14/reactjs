/*Day-7: Write a useEffect, that will keep changing the document title, whenever the Counter component is rendered
Can you think of loading and saving the counter value into local storage using an useEffect?. Right now when we reload the page, we lose the counter value that existed there, and end up starting from beginning. 
 */

import './Counter.css';

import React, { useEffect, useState } from 'react';

const Counter1 = () => {
    let [count, setCount] = useState(0);
    let [multiplier, setMultiplier] = useState(5);
    
    /* useEffect(() => {
        console.log('* component is rendered');
        return () => {
            console.log('Component is unmounted');
        };
    }, []); */

    useEffect(() => {
        console.log('Component is rendered');
        //counter = counter + 1;
        //setCount(count);
        document.title = `Component rendered ${count} times`;
    }, [count]);

    useEffect(() => {
        const initialValue = localStorage.getItem("newcount");
        if(initialValue) {
            setCount(Number(initialValue));
        }
    }, []);

    return (
        <div className="Counter">
            <button 
                onClick={() => {
                    count = count - 1;
                    console.log('- clicked', count);
                    setCount(count);
                    localStorage.setItem("newcount", count);
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
                    localStorage.setItem("newcount", count);
                    //console.log(data);
                }}
            >
                +
            </button>
            <div className="Multiplier">
                <label htmlFor="multiplier">Multiplier</label>
                <input 
                    onChange={(event) => {
                        console.log(event.target.value);
                        setMultiplier(event.target.value);
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


export default Counter1;