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
                <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
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
