import React from 'react';
import './first-letter-custom-heading-element.css';

export default function FirstLetterCustomHeadingElement(props) {
  const leftMarginStyle = {
    marginLeft: props.leftMargin,
  };

  return (
    <h2 className='heading-text' style={leftMarginStyle}>
      {props.text}
    </h2>
  )
}
