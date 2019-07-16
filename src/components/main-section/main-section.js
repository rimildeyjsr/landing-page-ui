import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './main-section.css';
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "../section-one/section-one";
import SectionTwo from "../section-two/section-two";
import NotifyMePopup from "../notify-me-popup/notify-me-popup";
import MovingBackgroundText from "../moving-background-text/moving-background-text";

export class MainSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNotifyMePopup: false,
      sectionTwoLoaded: false,
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
        fixedElements={['.contact-div']}
        afterLoad = {(origin, destination, direction) => {
          if(destination.index === 1) {
            this.setState({
              sectionTwoLoaded: true
            })
          }
        }

        }
        render={({state, fullpageApi}) => {
          return (
            <div id="fullpage-wrapper">
              <div className='section'>
                <div className='section-wrapper'>
                  <SectionOne
                    moveToNextSection={() => fullpageApi.moveSectionDown()}
                  />
                  <MovingBackgroundText/>
                  <div className='contact-div'>
                    <a href="mailTo:leavethemails@gmail.com">
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              <div className='section'>
                <div className='section-wrapper'>
                  <SectionTwo
                    showLightBox={this.toggleLightBoxDisplay.bind(this)}
                    sectionTwoLoaded={this.state.sectionTwoLoaded}
                  />
                  <MovingBackgroundText/>
                </div>
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
