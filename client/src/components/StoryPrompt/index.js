import React, { useEffect, useState } from 'react';
import { useStory } from '../Story/StoryContext';
import './style.css';

export default function StoryPrompt() {
    const story = useStory();
   
    //get answers from database and display buttons for both
    //for loop

    return (
        <div className="prompt mt-3 mb-5">
            {story.prompt}
        </div>
    )
}