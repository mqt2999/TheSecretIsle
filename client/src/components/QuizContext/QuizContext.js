import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';

const TriviaContext = React.createContext();

const fakeTrvia = [
    {
        question: 'baba booey'
    }
]


export function useTrivia() {
    return useContext(TriviaContext);
}

export function TriviaProvider({children}) {
    const [trivia, setTrivia] = useState(fakeTrvia);

    useEffect( () => {
        axios.get("https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=boolean")
        .then(res => {
            setTrivia(res.data.results)
        })         
    }, [])

    return (
        <TriviaContext.Provider value={trivia}>
            {children}
        </TriviaContext.Provider>
    )
}