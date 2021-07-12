import React, { useEffect, useState } from 'react';
import TimerBlock from './TimerBlock';
import styles from './componentStyle/component.module.css'



export default function Timer() {
    const [content, setContent] = useState();
    let timeRemaining = 30;
    const numberOfBlocks = 10;

    //calculate how many blocks to display and calculate height flex-box vertical


    return (
        <div className={styles.timer}>
            {content}
        </div>
    )
}

const renderTimerBlocks = (totalTime, blockCount) => {
    //calculate sytle for blocks (width, etc.) to add to each block
    let blockArray = [];
    for (let i = 0; i < blockCount; i++) {
        blockArray.push(<TimerBlock/>);
    }
    //setContent(blockArray);
    return blockArray;
}