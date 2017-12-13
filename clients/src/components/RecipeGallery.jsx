import React from 'react';
import { Link } from 'react-router-dom'
import '../css/style.css';
import thirteen from '../assets/thirteen.jpg';

class RecipeGallery extends React.Component {
  render() {
    return (
    <div>
      <div className="zoom-container">
            <Link to={`/SingleRecipe/${this.props.id}`} >
              <span className="zoom-caption">
                  <span>{this.props.name}<br/> 
                    <small> Rice and beans </small>
                   </span>
              </span>
              <img src={thirteen} />
            </Link>
          </div>

        <div className="mainBtn" style={{ marginLeft: '95px' }}>
            <button className="btn btn-danger btn-sm"><span><i className="fa fa-thumbs-down" aria-hidden="true"></i></span> {this.props.downvote}</button>
            <button className="btn btn-success btn-sm"><span><i className="fa fa-thumbs-up" aria-hidden="true"></i></span> {this.props.upvote}</button>
            <button className="btn btn-danger btn-sm"><span><i className="fa fa-heart" aria-hidden="true"></i></span> 10</button>
        </div>
    </div>
    )
  }
}

export default RecipeGallery;