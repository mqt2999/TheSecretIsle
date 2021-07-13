import React from 'react';
import { StoryProvider } from './StoryContext';
import { CharacterProvider } from './CharacterContext';
import StoryPrompt from './StoryPrompt';
import ChoiceBox from './ChoiceBox';
import DebugConsole from './DebugConsole';

export default function Story() {

    return (
        <div>
            <StoryProvider>
                <CharacterProvider>
                    <DebugConsole/>
                    <StoryPrompt />
                    <ChoiceBox />
                </CharacterProvider>
            </StoryProvider>
        </div>
    )
}