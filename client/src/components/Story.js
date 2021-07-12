import React, { useEffect, useState } from 'react';
import StoryPrompt from './StoryPrompt';
import ChoiceBox from './ChoiceBox';

export default function Story() {
    const [content, setContent] = useState();

    //get answers from database and display buttons for both
    //for loop

    return (
        <div>
            <StoryPrompt/>
            <ChoiceBox/>
        </div>
    )
}