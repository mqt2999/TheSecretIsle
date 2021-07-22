import React, { useEffect, useState } from 'react';
import Tile from '../Tile';

export default function LightPuzzle() {
    const [content, setContent] = useState();

    const checkForWin = () => {
        //if all tiles are lit or off end game with success
    }

    return (
        <LightPuzzle>
            <div>
            <Tile/>
            <Tile/>
            <Tile/>
            </div>
            <div>
            <Tile/>
            <Tile/>
            <Tile/>
            </div>
            <div>
            <Tile/>
            <Tile/>
            <Tile/>
            </div>
        </LightPuzzle>
    )
}