import React, { Children, useEffect, useState } from 'react';
import {useStory, useStoryUpdater} from '../Story/StoryContext'
import { useCharacter } from '../Story/CharacterContext'

export default function Choice(props) {
    const processChoice = useStoryUpdater();
    const character = useCharacter();
    //TODO: change to button that on click run charScore calcs and gets new question/puzzle

    return (
        <div className="d-grid gap-2 col mx-auto">
            <button className="btn btn-light" onClick={processChoice}>
                {props.children}
            </button>
        </div>
    )
}