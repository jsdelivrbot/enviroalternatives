import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Link from "gatsby-link"



class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: true
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    render(props) {
        const { items, label } = this.props;
        const showMenu = this.state.showMenu;
        const sidebarClass = classNames({
            'sidebar': true,
            'sidebar-menu-expanded': showMenu,
            'sidebar-menu-collapsed': !showMenu
        });

        const elementsClass = classNames({
            'expanded-element': true,
            'is-hidden': !showMenu,
        });



    return (
      <nav className={`${sidebarClass} sidebar`}>
        <ul>
          <li><h3>{label}</h3></li>
            {items.map(item => (
              <li key={item.node.id}>
              <Link  className="exandable" to={item.node.frontmatter.path} title="test">
                {item.node.frontmatter.title}
              </Link>
              </li>
            ))}

        </ul>
      </nav>

        )
    }
}


export default Sidebar
