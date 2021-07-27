import React, { useEffect, useState } from 'react';
import { useStory } from '../Story/StoryContext';
import { useTrivia } from '../QuizContext/QuizContext'
import './style.css';

export default function Trivia() {
    const triviaArray =  useTrivia()
    return (
        <div className="minigame mt-3 mb-5">
            <h3> {triviaArray[0].question} </h3>
        </div>
    )
}
