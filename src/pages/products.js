import React from "react";
import Link from "gatsby-link";
import graphql from "graphql";

import Sidebar from '../components/Sidebar';

export default class ProductPageIndex extends React.Component {

  render() {
    const { data } = this.props;
    const { edges: products } = data.markdownRemark;

    return (
      <section className="section">
        <div className="container">
        <Sidebar />
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query ProductsPageQuery {
  markdownRemark(frontmatter: {path: {regex: "/products/"}}) {
    frontmatter {
      title
      path
      image
      heading
      description
      intro {
        blurbs {
          image
          text
        }
        heading
        description
      }
      main {
        heading
        description
        image1 {
          alt
          image
        }
        image2 {
          alt
          image
        }
        image3 {
          alt
          image
        }
      }
      testimonials {
        author
        quote
      }
      full_image
      pricing {
        heading
        description
        plans {
          description
          items
          plan
          price
        }
      }
    }
  }
}

`;
