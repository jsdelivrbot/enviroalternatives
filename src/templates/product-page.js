import React from 'react';
import graphql from 'graphql';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Sidebar from '../components/Sidebar';

export const ProductPageTemplate = ({
  image, title, heading, description, path, intro, main, testimonials, fullImage, pricing, navItems
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <Sidebar items={navItems.edges} path={path}/>
        </div>
        <div className="column is-9">
          <div className="section">
            <div className="columns">

              <div className="column is-9">
                <div className="content">

                  <div className="columns">
                    <div className="column is-7">
                      <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-7">
                      <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
                      <p>{main.description}</p>
                    </div>
                  </div>
                  <div className="tile is-ancestor">
                    <div className="tile is-vertical">
                      <div className="tile">
                        <div className="tile is-parent is-vertical">
                          <article className="tile is-child">
                            <img
                              style={{ borderRadius: '5px' }}
                              src={main.image1.image}
                              alt={main.image1.alt}
                            />
                          </article>
                        </div>
                        <div className="tile is-parent">
                          <article className="tile is-child">
                            <img
                              style={{ borderRadius: '5px' }}
                              src={main.image2.image}
                              alt={main.image2.alt}
                            />
                          </article>
                        </div>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <img
                            style={{ borderRadius: '5px' }}
                            src={main.image3.image}
                            alt={main.image3.alt}
                          />
                        </article>
                      </div>
                    </div>
                  </div>
                  <Testimonials testimonials={testimonials} />
                  <div
                    className="full-width-image-container"
                    style={{ backgroundImage: `url(${fullImage})` }}
                  />
                  <h2 className="has-text-weight-semibold is-size-2">{pricing.heading}</h2>
                  <p className="is-size-5">{pricing.description}</p>
                  <Pricing data={pricing.plans} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { allMarkdownRemark: navItems } = data;

  return (
    <ProductPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      path={frontmatter.path}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
      navItems={navItems}
    />
  );
};

export const productPageQuery = graphql`
  query ProductPage($path: String!) {
    allMarkdownRemark(filter:{frontmatter:{path:{regex: "/products/"}}}) {
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
