import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Link from "gatsby-link"
import MetisMenu from 'react-metismenu';

class Sidebar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {activeLinkTo: ""};

      this.buildTree = this.buildTree.bind(this);
    }
    buildTree(items) {
      const menu = [];

      const categories = new Set(items.map(
        item => item.node.frontmatter.category
      ));

      categories.forEach(category => {
        const menuItem = {};
        const content = [];

        items.forEach(item => {
          if(item.node.frontmatter.category === category)
            content.push({label:item.node.frontmatter.title, to:item.node.frontmatter.path})
        });

        menuItem.label = category

        if(content.length > 1)
          menuItem.content = content
        else {
          menuItem.to = content[0].to
        }

        menu.push(menuItem);
      })

      return menu;
    }
    render() {

    return (
        <div>
          <MetisMenu
            content={this.buildTree(this.props.items)}
            activeLinkTo={this.state.activeLinkTo}
          />
        </div>
        )
    }
}


export default Sidebar;
