import React ,{useEffect, useState} from "react";
import axios from "axios"
import ContainerBig from '../components/ContainerBig/ContainerBig'
import Navbar from "../components/Navbar";
import StoryPrompt from '../components/StoryPrompt'
import Trivia from "../components/Trivia/Trivia";
import ChoiceBoxQuiz from "../components/ChoiceBoxQuiz/ChoiceBoxQuiz";
import { StoryProvider } from "../components/Story/StoryContext";
import { CharacterProvider } from "../components/Story/CharacterContext";
import { TriviaProvider } from "../components/QuizContext/QuizContext"



function Quiz() {
    const [questions, setQuestions]= useState({})
    const [riddle, setRiddle] = useState({})
    const [miniGame, setMiniGame] = useState({}) 
  

    // useEffect( () => {
    //     getQuizQuestions()
    // },[])

    // function getQuizQuestions() {
    //     axios.get("/api/story/")
    //         .then(res => {
                
    //             setQuestions(res.data)
    //           })
        
    // }
      return(
        <ContainerBig>
            <Navbar />
            <StoryProvider>
                <CharacterProvider>
                    <StoryPrompt />
                    <TriviaProvider>
                    <Trivia/>
                    <ChoiceBoxQuiz />
                    </TriviaProvider>
                </CharacterProvider>
            </StoryProvider>
        </ContainerBig>
      )

}

export default Quiz;