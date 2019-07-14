import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './main-section.css';
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "../section-one/section-one";
import SectionTwo from "../section-two/section-two";
import NotifyMePopup from "../notify-me-popup/notify-me-popup";

export class MainSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNotifyMePopup: false,
    }
  }

  toggleLightBoxDisplay() {
    this.setState( {
      showNotifyMePopup: !this.state.showNotifyMePopup,
    });
  }

  render() {
    return(
      <ReactFullpage
        sectionsColor={["#272727", "#272727"]}
        render={() => {
          return (
            <div id="fullpage-wrapper">
              <div className='section'>
                <SectionOne/>
              </div>

              <div className='section'>
                <SectionTwo
                  showLightBox={this.toggleLightBoxDisplay.bind(this)}
                />
                {
                  this.state.showNotifyMePopup ?
                    <NotifyMePopup
                      closeLightBox={() => this.toggleLightBoxDisplay()}
                    />
                    :
                    null
                }
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
