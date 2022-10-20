/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { auth } from 'store/actions';

const Nav = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const admin = useSelector((state) => state.auth.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      dispatch(auth());
    }
  }, [isAuthenticated]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
        >
          <img
            alt="logo"
            height="65px"
            src="images/logos/logo.webp"
            width="170px"
          />
        </a>

        <button
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarsExampleDefault"
          data-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-awesome fa fa-bars" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link page-scroll"
                href="#header"
              >
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link page-scroll"
                href="#features"
              >
                FEATURES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link page-scroll"
                href="#details"
              >
                DETAILS
              </a>
            </li>
          </ul>
          {isAuthenticated === false || isAuthenticated === null ? (
            <>
              <span className="nav-item">
                <Link to="/auth/login">
                  <button className="btn-outline-sm">LOG IN</button>
                </Link>
              </span>
            </>
          ) : admin !== null && user === null ? (
            <span className="nav-item">
              <Link to="/auth/login">
                <button className="btn-outline-sm">LOG IN CAUSE ADMIN</button>
              </Link>
            </span>
          ) : user !== null && isAuthenticated === true ? (
            <span className="nav-item">
              <Link to={user.dashboards[0].href}>
                <button className="btn-outline-sm">GO TO DASHBOARD</button>
              </Link>
            </span>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
