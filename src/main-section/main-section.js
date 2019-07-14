import React, {Component} from 'react';
import './main-section.css';
import FirstLetterCustomHeadingElement
  from "../first-letter-custom-heading-element/first-letter-custom-heading-element";

export class MainSection extends Component {
  render() {
    return(
      <div className='main-section-wrapper'>
        <FirstLetterCustomHeadingElement text="Let's"/>
        <FirstLetterCustomHeadingElement text="Make" leftMargin="105px"/>
        <FirstLetterCustomHeadingElement text="This" leftMargin="-2px"/>
        <FirstLetterCustomHeadingElement text="Happen" leftMargin="60px"/>
      </div>
    )
  }
}

export default MainSection;
