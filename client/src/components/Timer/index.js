import React, { useEffect, useState, useRef, useReducer } from 'react';
import { ListGroup } from 'react-bootstrap';
import TimerBlock from '../TimerBlock';
import "./style.css";

export default function Timer() {
    const numberOfBlocks = 12;

    const [timerStarted, setTimerStarted] = useState(false);

    const renderTimerBlocks = (blockCount) => {
        let blockArray = [];
        for (let i = 0; i < blockCount; i++) {
            blockArray.push(<TimerBlock key={i} />);
        }
        console.log(blockArray);
        return blockArray;
    }

    const reduceTimerBlocks = (state, action) => {
        console.log("inside reduceTimer")
        if (state.number >= 0) {
            console.log("inside reduceTimer true")
            return ({ components: renderTimerBlocks(state.number - 1), number: state.number - 1 });
        } else {
            console.log("inside reduceTimer else")
            return state;
        }
    }

    const [timerBlocks, dispatch] = useReducer(reduceTimerBlocks, { number: numberOfBlocks, components: renderTimerBlocks(numberOfBlocks) });

    const startTimerOnFirstClick = () => {
        if (!timerStarted) {
            setTimerStarted(true);
            console.log("timer set to true");
        }
    }

    useEffect(() => {
        console.log(`starting? ${timerStarted}:: ${timerBlocks.number}`);
        if (timerStarted && timerBlocks.number > 0) {
            console.log("getting here");
            const timer = setInterval(() => {
                dispatch();
            }, 3000);
            console.log("skipping timeout");
            return () => {
                clearInterval(timer)
            };
        }
        console.log("are you rendering?");

    }, [timerStarted])

    return (
        <div className="timer-backdrop">
            <button className="col-2 btn btn-primary" onClick={startTimerOnFirstClick}>Start</button>
            <div className="row timer">
                {timerBlocks.components}
            </div>
        </div>

    )
}

