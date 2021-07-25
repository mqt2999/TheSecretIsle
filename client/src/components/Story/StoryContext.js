import React, { useContext, useState, useEffect } from 'react';
import { useCharacter } from './CharacterContext';
import axios from 'axios';

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

    const character = useCharacter();

    const [storyContext, setStoryContext] = useState({
        storyChunk: 'Failed to get Question',
        answer1: '...Loading Answer',
        answer2: '...Loading Answer'
    });

    // const [storyContext, setStoryContext] = useState(async () => {
    //     try {
    //         const storyData = await fetch('api/story/1');
    //         console.log(storyData.json);
    //         return storyData;
    //         console.log(storyContext);
    //     } catch {
    //         return ({
    //             storyChunk: 'Failed to get Question',
    //             answer1: '...Loading Answer',
    //             answer2: '...Loading Answer'
    //         })
    //     }
    // });

    useEffect( () => {
        fetch(`api/story/1`)
        .then(res => res.json())
        .then(data => 
            {console.log(data)
            setStoryContext(data[0])
            })
    }, [])

    //TODO: rework to fetch new questions from database
    const processChoice = (event) => {
        axios.post('api/user')
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

