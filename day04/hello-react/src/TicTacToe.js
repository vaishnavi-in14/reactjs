/* Day-14: Add support for highlighting the win state by displaying the rows/column/diagonal squares with different colored text
Check if there was a draw and display the status
Add two fields to get players names and ensure only one character can be entered in each field, and you cant enter same name for both players
Can we store history to local storage and resurrect the game upon reloading in the browser?  (Remember the custom hook to read/write from local storage)
 */

/* Day-16: Implement the useTicTacToe and then refactor it to use useReducer on your own. */
import './TicTacToe.css';

import React, { useEffect, useRef } from 'react';

import useTicTacToe from './useTicTacToe';

import cn from 'classnames';

const Square = ({highlight, value, handleClick}) => {
    //console.log(highlight);
    return (
        <button 
            //when highlight becomes true square will be highlighted
            className={cn('square', {'Highlight': highlight})}
            onClick={handleClick}>
            {value}
        </button>
    );
};

const Board = ({board, toHighlight, handleClick}) => {
    function renderSquare(i) {
        return <Square 
            //invoke toHighlight to check if square has to be highlighted
            highlight={toHighlight(i)}
            value={board[i]}
            handleClick={() => handleClick(i)}
        />;
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};


const Game = () => {
   
    // console.log(player1);
    // console.log(player2);

    const {
        history,
        step,
        setStep,
        player, 
        setPlayer,  
        setPlayer1,  
        setPlayer2,
        computeWinner,
        processCurrentStepAtIndex,
        resetGame,
    } = useTicTacToe();

    const handleClick = (i) => {
        // console.log(`square ${i} is clicked`);
        // const board = history[step];

        // console.log("History");
        // console.log(history.length);

        // console.log("Step");
        // console.log(step);
        processCurrentStepAtIndex(i);
    };
   
    const result = computeWinner(history[step]);

    const toHighlight = (i) => {
        //If result is obtained then use the indexes of resulted squares
        if(result) {
            let winIndexes = result[1];
            //console.log(winIndexes);
            //check if the index is present in win indexes
            if (winIndexes.includes(i)) {
                return true;
            }
            else {
                return false;
            }
        }
    } 

    function status() {
        //const result = computeWinner(history[step]);
        //console.log(result);
        let winner;
        //let toHighlight = Array(9).fill(false);
        
        /* if(winner === null) {
            return `Next player: ${player}`;
        } else {
            return `Player ${winner} won!`;
        } */

        //check if result is obtained
        if(result) {
            winner = result[0];
            return `Player ${winner} won`;
        }
        //if current step is 9 and result is null the game is draw
        else if(result === null && step === 9) {
            return `Game Draw `;
        }
        else {
            return `Next player: ${player}`;
        }
    } 

    const jumpTo = (index) => {
        setStep(index);
    }
   
    const renderHistory = () => {
        return history.map((b, index) => (
            <li key={index}><button 
                className = {cn("btn", {btnSelected: index === step})} 
                onClick={() => jumpTo(index)}>
                {index === 0 ? 'Go to start of the game' : `Goto step${index}`}
                </button>
            </li> 
        ));
    }

    // console.log(board);
    // console.log(history);

    const firstPlayerNameFieldRef = useRef(null);
    //console.log(firstPlayerNameFieldRef.current);
    useEffect(() => {
        //console.log(firstPlayerNameFieldRef.current);
        if(firstPlayerNameFieldRef.current) {
            firstPlayerNameFieldRef.current.focus();
        }
    }, []);

   


    /* let numberOfRenders = useRef(0);

    useEffect(() => {
        numberOfRenders.current += 1;
        console.log('Number of times rendered =', numberOfRenders.current);
    }); */

    return (
        <div className="game">
            <div className="game-board">
                <Board board={history[step]} toHighlight={toHighlight} handleClick={handleClick}/>
            </div>
            <div className="game-info">
                <div>{status()}</div>
                <ol>{renderHistory()}</ol>
            </div>
            <div className="name-inputs">
                <label htmlFor="player1">Player 1:</label>
                <input ref={firstPlayerNameFieldRef} 
                    className="input-box"
                    type="text" 
                    id="player1"
                    onChange={(event) => { 
                        //console.log(event.target.value);
                        let newPlayer1 = event.target.value;
                        setPlayer1(newPlayer1);
                        setPlayer(newPlayer1)
                    }}
                    placeholder={'Enter player 1 name'}
                    maxLength={1}
                />
                <br/>
                <label htmlFor="player2">Player 2:</label>
                <input type="text" 
                    className="input-box"
                    id="player2"
                    onChange={(event) => {
                        //console.log(event.target.value)
                        if(document.getElementById('player1').value === event.target.value) {
                            alert("Cannot use same name for two players");
                        }
                        else {
                            let newPlayer2 = event.target.value;
                            setPlayer2(newPlayer2);
                        }
                    }} 
                    placeholder={'Enter player 2 name'}
                    maxLength={1}
                />
            </div>
            <div>
                <button className="resetBtn"
                    onClick={() => {
                        resetGame();
                    }}
                >
                Reset Game
                </button>
            </div>
        </div>
    );
};

// ========================================

export default Game;
