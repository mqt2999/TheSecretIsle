import React from 'react';
import "./style.css";

function MainTitle(props) {
  return(
    <div className="d-flex flex-column justify-content-center align-middle">
        <h1 className="mainFont">The Secret Isle</h1>
        {props.children}
    </div>
  )
}

export default MainTitle
