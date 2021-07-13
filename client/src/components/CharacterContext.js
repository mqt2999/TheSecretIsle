import React, {useContext, useState} from 'react';

const CharacterContext = React.createContext();

const fakePlayer = {
    characterScore: 15,
    lastQuestion: 0
}

export function useCharacter() {
    return useContext(CharacterContext);
}

export function CharacterProvider({children}) {
    const [characterContext, setCharacterContext] = useState(fakePlayer);

    //TODO: finish the update Character method
    // const updateCharacter = () => 

    return (
        <CharacterContext.Provider value={characterContext}>
            {children}
        </CharacterContext.Provider>
    )
}