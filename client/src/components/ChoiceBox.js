import React, { useEffect, useState } from 'react';
import Choice from './Choice';
import {useStory} from './StoryContext';

export default function ChoiceBox() {
    const story = useStory();

    
    //get answers from database and display buttons for both
    //for loop

    return (
        <div>
            <Choice mod={story.question1.modifier}>{story.question1.question}</Choice>
            <Choice mod={story.question2.modifier}>{story.question2.question}</Choice>
        </div>
    )
}