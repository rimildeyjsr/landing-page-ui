import React, {Component} from 'react';
import "./moving-background-text.css";
import text from "../../boilerplate-text";

export class MovingBackgroundText extends Component {
  render() {
    return(
      <div className="tech-slideshow">
        <div className="mover-1">
          {text.text}
          {text.text}
          {text.text}
          {text.text}
          {text.text}
          {text.text}
          {text.text}
        </div>
        <div className="mover-2">
          {text.text}
          {text.text}
          {text.text}
          {text.text}
          {text.text}
          {text.text}
          {text.text}
        </div>
      </div>
    )
  }
}

export default MovingBackgroundText;
