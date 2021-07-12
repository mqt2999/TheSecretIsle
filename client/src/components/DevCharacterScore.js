import React, { useEffect, useState } from 'react';
import { StoryProvider } from './StoryContext';
import StoryPrompt from './StoryPrompt';
import ChoiceBox from './ChoiceBox';
import {useCharacter} from './CharacterContext';

export default function Story() {

    const story = useCharacter();
    //get answers from database and display buttons for both
    //for loop

    return (
        <div>
            <StoryProvider>
            <StoryPrompt/>
            <ChoiceBox/>
            </StoryProvider>
        </div>
    )
}