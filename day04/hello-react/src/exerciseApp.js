/* import Box from './Box'; */

import Counter2 from './Counter2';

import { readFromStorage, writeToStorage } from './LocalStorage'

/* import Login from './Login'; */

const COUNTER_DISPLAYED = 'CounterDisplayed';
function App() {
    let [counter, setCounter] = React.useState(0);
    let [flag, setFlag] = React.useState(() => {
        const flagFromStorage = readFromStorage(COUNTER_DISPLAYED); // eslint-disable-next-line 
        if (flagFromStorage == undefined) {
            return true;
        } else {
            return flagFromStorage;
        }
    });

    return (
       /*  <div className="App">
            <Box dashed className="ThickBorder" style={{ color: "blue"}}>
                <div>
                    <Box className="NestedBox">
                    </Box>  
                </div>
            </Box>
        </div> */
        <div className="App">
            {/* <Counter1></Counter1> */}
            {flag && (
                <Counter2
                    counterCallback={(count) => {
                        counter = count;
                        setCounter(count);
                    }}
                />
            )}
            <h1>The most recent value of the counter is:{counter}</h1>
            <button 
                onClick={() => {
                    setFlag((currentState) => {
                        let newState = !currentState;
                        writeToStorage(COUNTER_DISPLAYED, newState);
                        return newState;
                    });
                }}
            >
            Toggle Counter
            </button>
            <br/>
            <br/>    
            <button 
                disabled={localStorage.getItem(COUNTER_DISPLAYED) === null}
                onClick={() => {
                    window.localStorage.removeItem(COUNTER_DISPLAYED);
                    //window.localStorage.removeItem(COUNT);
                    //window.localStorage.clear()
                }}
            >Clear local storage</button>
        </div>
       /*  <div className="App">
            <Login>

            </Login>
        </div> */
    );
}