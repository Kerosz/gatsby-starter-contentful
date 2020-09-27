import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { Header, Navigation, Footer } from '../components';

import navContent from '../../content/nav';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      branding: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <Header>
        <Header.Container>
          <Header.Pane>
            <Header.Logo
              to="/"
              fixed={data.branding.childImageSharp.fixed}
              alt={data.site.siteMetadata.title}
            />
            <Navigation>
              {navContent.map((item) => {
                return (
                  <Navigation.Title to={item.link} key={item.id}>
                    {item.title}
                    {item.list ? (
                      <Navigation.List>
                        {item.list.map((list) => {
                          return (
                            <Navigation.Item to={list.link} key={list.id}>
                              {list.item}
                            </Navigation.Item>
                          );
                        })}
                      </Navigation.List>
                    ) : null}
                  </Navigation.Title>
                );
              })}
            </Navigation>
          </Header.Pane>

          <Header.Button href="tel:314-558-4847">
            (314) 558 - 4847
          </Header.Button>
        </Header.Container>
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
