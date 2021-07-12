import React, { useEffect, useState } from 'react';
import TimerBlock from './TimerBlock';
import styles from './componentStyle/component.module.css'

export default function Timer() {
    const [content, setContent] = useState();

    //calculate how many blocks to display and calculate height flex-box vertical

    return (
        <div className={styles.timer}>
            Timer
            <TimerBlock/>
            <TimerBlock/>
            <TimerBlock/>
            <TimerBlock/>
            <TimerBlock/>
        </div>
    )
}