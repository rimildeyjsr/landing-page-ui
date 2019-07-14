import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './main-section.css';
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "../section-one/section-one";
import SectionTwo from "../section-two/section-two";

export class MainSection extends Component {
  render() {
    return(
      <ReactFullpage
        sectionsColor={["#272727", "#272727"]}
        render={({ state}) => {
          return (
            <div id="fullpage-wrapper">
              <div className='section'>
                <SectionOne/>
              </div>

              <div className='section'>
                <SectionTwo/>
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
