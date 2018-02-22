import React from 'react';
import graphql from 'graphql';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Sidebar from '../components/Sidebar';

export const LifestylePageTemplate = ({
  image, title, heading, description, content, navItems
}) => (
          <div className="section">
            <div className="rows">
              <h2>{title}</h2>
            </div>
            {content.map(section => (
              <div>{section.text}</div>
            ))}
          </div>
);

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { allMarkdownRemark: navItems } = data;

  return (
    <LifestylePageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      content={frontmatter.intro.blurbs}
      navItems={navItems}
    />
  );
};

export const lifestylePageQuery = graphql`
  query LifestylePage($path: String!) {
    allMarkdownRemark(filter:{frontmatter:{path:{regex: "/lifestyle/"}}}) {
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
        }
    }
  }
}

`;
