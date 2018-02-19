import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Link from "gatsby-link"
import MetisMenu from 'react-metismenu';

const menu = [
  {
    icon: 'dashboard',
    label: 'Menu 1',
    to: '/products/waterlesstoilets',
  },
  {
    icon: 'bell',
    label: 'Menu 2',
    to: 'menu-2',
  },
  {
    icon: 'bolt',
    label: 'waterlesstoilets',
    content: [
      {
        icon: 'bolt',
        label: 'Sub Menu',
        to: '/products',
      },
    ],
  },
  {
    icon: 'external-link',
    label: 'External Link',
    externalLink: true,
    to: 'https://www.google.com',
  },
];

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
    render(props) {
        const { items, label } = this.props;

    return (
        <div>
          <MetisMenu
            content={this.buildTree(items)}
            activeLinkFromLocation
          />
        </div>
        )
    }
}


export default Sidebar
