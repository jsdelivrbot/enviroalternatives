import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import MetisMenu from 'react-metismenu';
import Navbar from '../components/Navbar';
import './all.sass';

class Template extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarMenu: []
    }

    this.setMenu = this.setMenu.bind(this);
  }

  setMenu() {
    const path = this.props.location.pathname;
    const navItems = this.props.data.allMarkdownRemark.edges;
    const menu = [];
    const re = /(?:.*?\/)(?:.*?\/)/;
    const filter = new RegExp(path.match(/[^\/].[a-z]*/)[0].replace(/\//, ""));

    navItems.map(edge => {
      const item = edge.node.frontmatter;
      const test = filter.test(item.path);
      if(filter.test(item.path)){
        menu.push({
          label: item.category,
          to: item.path
        })

      }
    });
    return menu;
  }
  render() {

    const {children, match, data} = this.props;
    const { allMarkdownRemark: navItems } = data;


    return (
      <div>
        <Helmet title="EnviroAlternatives | live green" />
        <Navbar />
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <MetisMenu
                  content={this.setMenu()}
                />
              </div>
              <div className="column is-9">
                <div>{children()}</div>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

Template.propTypes = {
  route: PropTypes.object,
  children: PropTypes.func,
}

export default Template;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            category
            type
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        email
        phone
      }
    }
  }
`
