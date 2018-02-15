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
    render(props) {
        const { items, label } = this.props;
        const categories = [...new Set(items.map(
          item => item.node.frontmatter.category
        ))];

    return (
        <div>
          <MetisMenu
            content={menu}
            activeLinkFromLocation
          />
        </div>
        )
    }
}


export default Sidebar
