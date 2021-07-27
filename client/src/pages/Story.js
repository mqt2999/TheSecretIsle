import React, { useEffect } from "react";
import ContainerBig from '../components/ContainerBig/ContainerBig'
import Navbar from "../components/Navbar";
import { StoryProvider } from '../components/Story/StoryContext';
import { CharacterProvider } from '../components/Story/CharacterContext';
import StoryPrompt from '../components/StoryPrompt';
import ChoiceBox from '../components/ChoiceBox';
import StoryPic from '../components/StoryPic/StoryPic'
import Timer from "../components/Timer/index"


function Story() {
    return (
        <ContainerBig>
            <Navbar />
            <StoryPic />
            <CharacterProvider>
                <StoryProvider>
                    <StoryPrompt />
                    <Timer startTimer={1}/>
                    <ChoiceBox />
                </StoryProvider>
            </CharacterProvider>
            <a className="btn" href="/quiz">try quiz</a>
        </ContainerBig>   
    )
}

export default Story
