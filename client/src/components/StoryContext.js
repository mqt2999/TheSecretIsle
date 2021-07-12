import React, {useContext, useState} from 'react';

const StoryContext = React.createContext();

const fakeQuestion = {
    prompt: "While walking through a cave you come upon a fork in the tunnel, Do you go left or right?",
    question1: {
        question: "Go Left",
        modifier: 4
    },
    question2: {
        question: "Go Right",
        modifier: -10
    },
    decider: 3
}

export function useStory() {
    return useContext(StoryContext);
}

export function StoryProvider({children}) {
    const [storyContext, setStoryContext] = useState(fakeQuestion);

    return (
        <StoryContext.Provider value={storyContext}>
            {children}
        </StoryContext.Provider>
    )
}