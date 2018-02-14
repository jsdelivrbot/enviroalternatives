import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-tree"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>{props.title}</h1>
                <span className="icon fa-envelope" />{props.email}<br />
                <span className="icon fa-phone" />{props.phone}
            </div>
        </div>
        <nav>
            <ul>
              <Link className="navbar-item" to="/products">
                Green Products
              </Link>
              <Link className="navbar-item" to="/lifestyle">
                Green Lifestyle
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
