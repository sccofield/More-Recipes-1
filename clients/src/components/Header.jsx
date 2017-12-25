import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import signUserOut from './../actions/signout';

// components
import Signin from './Signin';

const Header = (props) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">More Recipes</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            <span className="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recipes">Recipes</Link>
          </li>

          {
            props.authenticated &&
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
          }

          {
            props.authenticated &&
              <li className="nav-item">
                <a className="nav-link" onClick={() => { props.signUserOut(); }}>Sign out</a>
              </li>
          }
        </ul>

        {
          !props.authenticated &&
                    <Signin />
        }
      </div>
    </nav>
  </header>
);


const mapStateToProps = state => ({
  authenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
  signUserOut: () => {
    dispatch(signUserOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
