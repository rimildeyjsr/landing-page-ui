import React, {Component} from 'react';
import "./section-two.css";

export class SectionTwo extends Component {
  render() {
    return(
      <div className='section-2-wrapper'>
        <h2 className='section-2-heading'>
          We’re building an amazing new gaming experience for you.
        </h2>

        <div className='notify-me-button'>
          NOTIFY ME
        </div>
      </div>
    )
  }
}

export default SectionTwo;
