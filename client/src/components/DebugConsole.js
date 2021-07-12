import React, {useState} from 'react';
import {useStory} from './StoryContext';
import {useCharacter} from './CharacterContext';
import styles from './componentStyle/component.module.css'

export default function DebugConsole() {
    const character = useCharacter();
    const story = useStory();


    //TODO: Fix iterating through all object and displaying on screen
    // const renderData = (...data) => {
    //     const display = [];
    //     data.forEach(item => {
    //         for(const property in item) {
    //             display.push(`${item.hasOwnProperty(property)}: ${property}`)
    //         }
    //     })
    //     return setState(display);
    // }

    return (
        <ul className={styles.debug}>
            <li>CharScore: {character.characterScore}</li>
            <li>LastQuestion: {character.lastQuestion}</li>
            <li>Prompt: {story.prompt}</li>
            <li>Question1: {story.question1.question} Mod: {story.question1.modifier}</li>
            <li>Question2: {story.question2.question} Mod: {story.question2.modifier}</li>
            <li>Decider: {story.decider}</li>
        </ul>
    )
}