import React from 'react';
import "./style.css";

function MainTitle(props) {
  return(
    <div id="home-title" className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="mainFont">TheSecretIsle</h1>
        {props.children}
    </div>
  )
}

export default MainTitle
