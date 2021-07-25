import React from 'react';
import "./style.css";

function MainTitle(props) {
  console.log("main title",props.children)
  return(
    <div className="d-flex flex-column justify-content-center align-middle">
        <a href="/login" className="mainFont">The Secret Isle</a>
        {props.children}

       <div className="btnDiv"> <a href="/quiz"> <button> start quiz </button></a> </div> 
    </div>
  )
}

export default MainTitle
