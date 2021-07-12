import React, { useEffect, useState } from 'react';
import { useStory } from './StoryContext';

export default function StoryPrompt() {
    const story = useStory();

    console.log(story);
    

    //get answers from database and display buttons for both
    //for loop

    return (
        <div>
            {story.prompt}
        </div>
    )
}