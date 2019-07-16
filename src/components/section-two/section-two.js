import React, {Component} from 'react';
import "./section-two.css";

export class SectionTwo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='section-2-wrapper'>
        <div className='section-2-inner'>
          <h2 className={this.props.sectionTwoLoaded ? 'section-2-heading animated fadeInUp25' : 'section-2-heading'}>
            We’re building an amazing new gaming experience for you.
          </h2>

          <button className={this.props.sectionTwoLoaded ? 'notify-me-button animated fadeInUp60' : 'notify-me-button'} onClick={this.props.showLightBox}>
            NOTIFY ME
          </button>
        </div>
      </div>
    )
  }
}

export default SectionTwo;
