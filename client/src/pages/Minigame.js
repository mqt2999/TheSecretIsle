import React from "react";
import Container from "../components/Container";
import ContainerBig from '../components/ContainerBig/ContainerBig'
import Navbar from "../components/Navbar";
import StoryPrompt from '../components/StoryPrompt'
import Minigame from '../components/Minigame/Minigame'
import { StoryProvider } from "../components/Story/StoryContext";
import { CharacterProvider } from "../components/Story/CharacterContext";



function Story() {
    return (
      <ContainerBig>
          <Navbar />
          <StoryProvider>
                <CharacterProvider>
                    <StoryPrompt />
                    <Minigame>
                        ADD THE MINIGAME HERE
                    </Minigame>
                </CharacterProvider>
            </StoryProvider>
      </ContainerBig>
    )
}

export default Story