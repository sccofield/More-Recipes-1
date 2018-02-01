import React from 'react';
import PropTypes from 'prop-types';


const ActionButtons = props => (
  <div className="mainBtn">

    <button
      className="btn btn-outline-danger disabled"
      style={{ margin: '5px' }}
    >
      <span>
        <i className="fa fa-thumbs-down" />
      </span>
      {props.singleRecipe.downvote}
    </button>

    <button
      className="btn btn-outline-success disabled"
      style={{ margin: '5px' }}
    >
      <span>
        <i className="fa fa-thumbs-up" />
      </span>
      {props.singleRecipe.upvote}
    </button>

    <button className="btn btn-outline-danger disabled">
      <span>
        <i className="fa fa-heart disabled" />
      </span>
      {props.singleRecipe.favourite}
    </button>
  </div>

);

export default ActionButtons;

