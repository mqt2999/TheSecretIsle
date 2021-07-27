import React, { useEffect, useState } from 'react';
import { useStory } from '../Story/StoryContext';
import './style.css';

export default function Trivia( {a}) {
    
   console.log(a);
    return (
        <div className="minigame mt-3 mb-5">
            <h3> {a.question} </h3>
        </div>
    )
}
