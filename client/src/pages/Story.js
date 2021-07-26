import React from "react";
import Container from "../components/Container";
import ContainerBig from '../components/ContainerBig/ContainerBig'
import Navbar from "../components/Navbar";
import { StoryProvider } from '../components/Story/StoryContext';
import { CharacterProvider } from '../components/Story/CharacterContext';
import StoryPrompt from '../components/StoryPrompt';
import ChoiceBox from '../components/ChoiceBox';
import DebugConsole from "../components/DebugConsole";
import StoryPic from '../components/StoryPic/StoryPic'



function Story() {
    return (
      <ContainerBig>
          <Navbar />
          <StoryPic />
            <StoryProvider>
                <CharacterProvider>
                    <StoryPrompt />
                    <ChoiceBox />
                </CharacterProvider>
            </StoryProvider>
      </ContainerBig>
    )
}

export default Story
