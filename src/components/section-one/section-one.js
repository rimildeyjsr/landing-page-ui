import React, {Component} from 'react';
import "./section-one.css";
import FirstLetterCustomHeadingElement
  from "../first-letter-custom-heading-element/first-letter-custom-heading-element";
import baselineExpand from "../../images/baseline_expand.png";

export class SectionOne extends Component {
  render() {
    return (
      <div className='section-1-wrapper'>
        <div>
          <FirstLetterCustomHeadingElement text="Let's"/>
          <FirstLetterCustomHeadingElement text="Make" leftMargin="105px"/>
          <FirstLetterCustomHeadingElement text="This" leftMargin="-2px"/>
          <FirstLetterCustomHeadingElement text="Happen" leftMargin="60px"/>
        </div>

        <div className='image-circle'>
          <img src={baselineExpand} alt="baseline expand image" className='baseline-img'/>
        </div>
      </div>
    )
  }
}

export default SectionOne;
