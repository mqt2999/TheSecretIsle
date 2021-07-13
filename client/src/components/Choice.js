import React, { Children, useEffect, useState } from 'react';
import {useStory, useStoryUpdater} from './StoryContext'
import { useCharacter } from './CharacterContext';

export default function Choice(props) {
    const processChoice = useStoryUpdater();
    const character = useCharacter();
    //TODO: change to button that on click run charScore calcs and gets new question/puzzle

    return (
        <button onClick={processChoice}>
            {props.children}
        </button>
    )
}