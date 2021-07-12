import React, { Children, useEffect, useState } from 'react';

export default function Choice(props) {
    const [content, setContent] = useState();
    //probably use state and set to props children to allow the passing of the prompt and modifier of answer

    //TODO: change to button that on click run charScore calcs and gets new question/puzzle

    return (
        <button>
            {props.children}
        </button>
    )
}