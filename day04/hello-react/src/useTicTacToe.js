import { useReducer } from 'react';

const SET_PLAYER_1_ACTION_TYPE = 'SET_PLAYER_1';
const SET_PLAYER_2_ACTION_TYPE = 'SET_PLAYER_2';
const SET_CURRENT_PLAYER_ACTION_TYPE ='SET_CURRENT_PLAYER';
const RESET_ACTION_TYPE = 'RESET';
const PLAY_NEXT_STEP_ACTION_TYPE = 'PLAY_NEXT_STEP';
const GOTO_STEP_ACTION_TYPE = 'GO_TO_STEP';

const initialState = {
    history: [Array(9).fill(null)],
    player1: 'X',
    player2: 'O',
    currentPlayer: 'X',
    step: 0,
};

//1. Set Player 1
const setPlayer1Action = (playerName) => ({
    type: SET_PLAYER_1_ACTION_TYPE,
    playerName,
});

//2. Set Player 2
const setPlayer2Action = (playerName) => ({
    type: SET_PLAYER_2_ACTION_TYPE,
    playerName,
});

//3. Set current player
const setCurrentPlayer = (playerName) => ({
    type: SET_CURRENT_PLAYER_ACTION_TYPE,
    playerName,
});

//4. Reset the game
const resetGameAction = () => ({
    type: RESET_ACTION_TYPE,
    initialState
});

//5. Play Next Step
const playNextStep = (index) => ({
    type: PLAY_NEXT_STEP_ACTION_TYPE, 
    index
});

//6. Go to a step 
const goToStep = (step) => ({
    type: GOTO_STEP_ACTION_TYPE, 
    step
});



function useTicTacToe() {
    // const [history, setHistory] = useLocalStorageState([Array(9).fill(null)], 'HISTORY');
    // const [step, setStep] = useLocalStorageState(0, 'STEP');

    // const [player1, setPlayer1] = useLocalStorageState('X', 'PLAYER1');
    // const [player2, setPlayer2] = useLocalStorageState('O', 'PLAYER2');
    // const [player, setPlayer] = useLocalStorageState(player1, 'CURRENT-PLAYER'); 
     
    const ticTacToeReducer = (state, action) => {
        switch(action.type) {
            case SET_PLAYER_1_ACTION_TYPE:
                if(action.playerName.length === 1) {
                    return {...state, player1: action.playerName};
                }
                else {
                    throw new Error('Player name should not exceed one character');
                }
            case SET_PLAYER_2_ACTION_TYPE:
                if(action.playerName.length === 1 && action.playerName !== state.player1) {
                    return {...state, player2: action.playerName};
                }
                else {
                    throw new Error('Player name wrongly entered');
                }
            case SET_CURRENT_PLAYER_ACTION_TYPE:
                return {...state, currentPlayer: action.playerName};
            case RESET_ACTION_TYPE:
                return action.initialState;
            case PLAY_NEXT_STEP_ACTION_TYPE:
                return reduceNextStep(state, action.index);
            case GOTO_STEP_ACTION_TYPE:
                if(action.step >= 0 && action.step < 10) {
                    return {...state, step: action.step};
                } else {
                    throw new Error('Step needs to be within 0 and 10');
                }
    
            default:
                return state;
        }
    };

    function reduceNextStep(state, index) {
        //copy of recent history
        let {history, step, currentPlayer, player1, player2} = state;
        
        const board = history[step];
        const canInteract = () => step === history.length - 1;

        if(canInteract() && board[index] === null && !computeWinner(board)) {
            const prevHistory = history[step];
            const newHistory = [...prevHistory];
            newHistory[index] = currentPlayer;
        
            //concat history
            history = history.concat([newHistory]);
        
            //flip player
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        
            //increment step
            step += 1;
        
            return {...state, history, step, currentPlayer};
        }
    }

    const [state, dispatch] = useReducer(ticTacToeReducer, initialState);

    function computeWinner(board) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return [board[a], lines[i]];
            }
        }
        return null;
    }

    const history = state.history;
    const step = state.step;
    const player1 = state.player1;
    const player2 = state.player2;
    const player = state.currentPlayer;


    function processCurrentStepAtIndex(i) {
        dispatch(playNextStep(i));
    }

    function resetGame() {
       dispatch(resetGameAction());
    }

    function setStep(nextStep) {
        dispatch(goToStep(nextStep));
    }

    function setPlayer1(player1) {
        dispatch(setPlayer1Action(player1));
    }

    function setPlayer2(player2) {
        dispatch(setPlayer2Action(player2));
    }

    function setPlayer(playerName) {
        dispatch(setCurrentPlayer(playerName));
    }

    return {
        history, 
        step, setStep, 
        player, setPlayer, 
        setPlayer1, 
        setPlayer2, 
        computeWinner, processCurrentStepAtIndex,
        resetGame,
    };
}

export default useTicTacToe;