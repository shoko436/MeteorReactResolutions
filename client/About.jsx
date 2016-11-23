import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {
  
  render() {
    return(
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppesrTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1>About Us</h1>
        <p>
          Meteor gives you a radically simpler way to build realtime mobile and web apps, entirely in JavaScript from one code base. React abstracts away the DOM from you, giving a simpler programming model and better performance.
        </p>
      </ReactCSSTransitionGroup>
    )
  }
}