import React ,{useEffect, useState} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import axios from "axios"
import Story from '../components/Story';

function Quiz() {
    const [questions, setQuestions]= useState({})
    const [riddle, setRiddle] = useState({})
    const [miniGame, setMiniGame] = useState({}) 
    const [trivia, setTrivia] = useState({})

    useEffect( () => {
        getQuizQuestions()
        getTrivia()
    })

    function getQuizQuestions() {
        axios.get("/api/story/")
            .then(res => {
                
                console.log(res.data)
              })
        
    }
    function getTrivia(){
        axios.get("https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=boolean")
        .then(res => {
          setTrivia(res.json)
          console.log("hehehuey", res.data.results)
        })
      }

      return(
          <div> 
              <Story/>
          </div>
      )

}

export default Quiz;