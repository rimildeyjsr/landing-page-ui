import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './main-section.css';
import FirstLetterCustomHeadingElement from "../first-letter-custom-heading-element/first-letter-custom-heading-element";
import baselineExpand from '../../images/baseline_expand.png';
import ReactFullpage from "@fullpage/react-fullpage";

export class MainSection extends Component {
  render() {
    return(
      <ReactFullpage
        sectionsColor={["#272727", "#272727"]}
        render={({ state}) => {
          return (
            <div id="fullpage-wrapper">
              <div className='section'>
                <div className='main-section-wrapper '>
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
              </div>
            </div>
          );
        }}
      />
    )
  }
}

ReactDOM.render(<MainSection />, document.getElementById("root"));
export default MainSection;
