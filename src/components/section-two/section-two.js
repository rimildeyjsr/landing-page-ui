import React, {Component} from 'react';
import "./section-two.css";

export class SectionTwo extends Component {
  render() {
    return(
      <div className='section-2-wrapper'>
        <h2 className='section-2-heading'>
          We’re building an amazing new gaming experience for you.
        </h2>

        <button className='notify-me-button' onClick={this.props.showLightBox}>
          NOTIFY ME
        </button>
      </div>
    )
  }
}

export default SectionTwo;
