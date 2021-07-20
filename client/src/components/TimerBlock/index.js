import React, { useEffect, useState } from 'react';

export default function ButtonBox() {
    const [content, setContent] = useState();

    //small blocks to fill the timer with

    return (
        <div style = {{backgroundcolor: "blue"}}>
            Block
            {content}
        </div>
    )
}