import React, { useContext, useState } from 'react';

const StoryContext = React.createContext();
const StoryContextUpdater = React.createContext();

const fakeQuestions = [
    {
        id: 0,
        prompt: "While walking through a cave you come upon a fork in the tunnel, Do you go left or right?",
        question1: {
            question: "Go Left",
            modifier: 4
        },
        question2: {
            question: "Go Right",
            modifier: -10
        },
        decider: 3,
        nextQuestionUp: 1,
        nextQuestionDown: 2
    },
    {
        id: 1,
        prompt: "You discover gold",
        question1: {
            question: "Take all of it",
            modifier: 4
        },
        question2: {
            question: "Leave it",
            modifier: -10
        },
        decider: 3,
        nextQuestionUp: 1,
        nextQuestionDown: 2
    },
    {
        id: 0,
        prompt: "The right path leads you to a den of large rats, do you sneak through or try to fight?",
        question1: {
            question: "Sneak",
            modifier: 4
        },
        question2: {
            question: "Fight",
            modifier: -10
        },
        decider: 3,
        nextQuestionUp: 1,
        nextQuestionDown: 2
    }
]

export function useStory() {
    return useContext(StoryContext);
}
export function useStoryUpdater() {
    return useContext(StoryContextUpdater);
}

export function StoryProvider({ children }) {
    const [storyContext, setStoryContext] = useState(fakeQuestions[0]);

    //TODO: rework to fetch new questions from database
    const processChoice = (event) => {
        console.log(event);
        console.log(StoryContext);
        const newCharScore = 10 + StoryContext.mod;
        if (newCharScore > StoryContext.decider) {
            setStoryContext(priorStory => fakeQuestions[priorStory.nextQuestionUp]);
        } else {
            setStoryContext(priorStory => fakeQuestions[priorStory.nextQuestionDown]);
        }
    }

    return (
        <StoryContext.Provider value={storyContext}>
            <StoryContextUpdater.Provider value={processChoice}>
                {children}
            </StoryContextUpdater.Provider>
        </StoryContext.Provider>
    )
}