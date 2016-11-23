import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
  constructor(){
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppesrTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}>
        <h1 className="page-title">My Resolutions</h1>
        <ResolutionsForm/>
        <div>
          <ReactCSSTransitionGroup
            component="ul"
            className="resolutions"
            transitionName="resolutionLoad"
            transitionEnterTimeout={600}
            transitionLeaveTimeout={400}>
            {this.resolutions().map((resolution) => {
              return <ResolutionSingle key={resolution._id} resolution={resolution}/>
            })}
          </ReactCSSTransitionGroup>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
