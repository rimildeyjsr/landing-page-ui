import React, {Component} from 'react';
import "./section-one.css";
import FirstLetterCustomHeadingElement
  from "../first-letter-custom-heading-element/first-letter-custom-heading-element";
import baselineExpand from "../../images/baseline_expand.png";

export class SectionOne extends Component {
  render() {
    return (
      <div className='section-1-wrapper'>
        <div className='section-1-inner'>
          <div className='heading-container'>
            <FirstLetterCustomHeadingElement text="Let's"/>
            <FirstLetterCustomHeadingElement text="Make" leftMargin="100px"/>
            <FirstLetterCustomHeadingElement text="This" leftMargin="-22px"/>
            <FirstLetterCustomHeadingElement text="Happen" leftMargin="50px"/>
          </div>

          <div className='image-circle' onClick={this.props.moveToNextSection}>
            <img src={baselineExpand} alt="baseline expand image" className='baseline-img'/>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionOne;
