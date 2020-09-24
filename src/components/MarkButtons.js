import React from 'react';

function MarkButton(props) {
  return (
    <div className="NumberButton">
        <button onClick={() => {props.onClick()}}>{props.value}</button>
    </div>
  )
  }


export default MarkButton;
