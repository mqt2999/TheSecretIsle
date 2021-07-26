import React from "react";
import Container from "../components/Container";
import ContainerBig from '../components/ContainerBig/ContainerBig'
import Navbar from "../components/Navbar";
import StoryPrompt from '../components/StoryPrompt'
import Minigame from '../components/Minigame/Minigame'
import { StoryProvider } from "../components/Story/StoryContext";
import { CharacterProvider } from "../components/Story/CharacterContext";
import Timer from "../components/Timer"



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
                    <Timer />
                </CharacterProvider>
            </StoryProvider>
      </ContainerBig>
    )
}

export default Story