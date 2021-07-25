import React, { useEffect, useState } from 'react';
import { useStory } from '../Story/StoryContext';

export default function StoryPrompt() {
    const story = useStory();

    return (
        <div>
            {story.storyChunk}
        </div>
    )
}