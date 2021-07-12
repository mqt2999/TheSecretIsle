import React, { useEffect, useState } from 'react';
import Choice from './Choice';

export default function ChoiceBox() {
    const [content, setContent] = useState({choice1: "Go Left", choice2: "Go Right"});

    
    //get answers from database and display buttons for both
    //for loop

    return (
        <div>
            <Choice>{content.choice1}</Choice>
            <Choice>{content.choice2}</Choice>
        </div>
    )
}