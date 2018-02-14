import React from 'react'
import '../assets/scss/main.scss'
import PropTypes from 'prop-types';


import Header from '../components/Header'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>

        <div id="wrapper">

          <Header onOpenArticle={this.handleOpenArticle} title={siteTitle} timeout={this.state.timeout} />
          <Footer timeout={this.state.timeout} />

        </div>
        <div id="bg"></div>
      </div>
    )
  }
}

Template.propTypes = {
  route: PropTypes.object,
}

export default Template

export const pageQuery = graphql`
  query Indexuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`




//import React from "react";
//import Link from "gatsby-link";
//import Script from "react-load-script";
//import graphql from "graphql";
//
//export default class IndexPage extends React.Component {
//  handleScriptLoad() {
//    if (typeof window !== `undefined` && window.netlifyIdentity) {
//      window.netlifyIdentity.on("init", user => {
//        if (!user) {
//          window.netlifyIdentity.on("login", () => {
//            document.location.href = "/admin/";
//          });
//        }
//      });
//    }
//    window.netlifyIdentity.init();
//  }
//
//  render() {
//    const { data } = this.props;
//    const { edges: posts } = data.allMarkdownRemark;
//
//    return (
//      <section className="section">
//        <Script
//          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
//          onLoad={() => this.handleScriptLoad()}
//        />
//        <div className="container">
//          <div className="content">
//            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
//          </div>
//          {posts
//            .filter(post => post.node.frontmatter.templateKey === "blog-post")
//            .map(({ node: post }) => (
//              <div
//                className="content"
//                style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
//                key={post.id}
//              >
//                <p>
//                  <Link className="has-text-primary" to={post.frontmatter.path}>
//                    {post.frontmatter.title}
//                  </Link>
//                  <span> &bull; </span>
//                  <small>{post.frontmatter.date}</small>
//                </p>
//                <p>
//                  {post.excerpt}
//                  <br />
//                  <br />
//                  <Link className="button is-small" to={post.frontmatter.path}>
//                    Keep Reading →
//                  </Link>
//                </p>
//              </div>
//            ))}
//        </div>
//      </section>
//    );
//  }
//}
//
//export const pageQuery = graphql`
//  query IndexQuery {
//    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//      edges {
//        node {
//          excerpt(pruneLength: 400)
//          id
//          frontmatter {
//            title
//            templateKey
//            date(formatString: "MMMM DD, YYYY")
//            path
//          }
//        }
//      }
//    }
//  }
//`;
//
