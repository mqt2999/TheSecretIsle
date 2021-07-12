import React, { useEffect, useState } from 'react';
import { StoryProvider } from './StoryContext';
import StoryPrompt from './StoryPrompt';
import ChoiceBox from './ChoiceBox';
import { CharacterProvider } from './CharacterContext';

export default function Story() {
    const [content, setContent] = useState();

    //get answers from database and display buttons for both
    //for loop

    return (
        <div>
            <StoryProvider>
                <CharacterProvider>
                    <StoryPrompt />
                    <ChoiceBox />
                </CharacterProvider>
            </StoryProvider>
        </div>
    )
}