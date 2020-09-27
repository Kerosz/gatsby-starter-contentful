import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import { HeaderSection, Container, Pane, Button } from './styles/header';

const Header = ({ bg, children, ...restProps }) => {
  return (
    <HeaderSection bg={bg} {...restProps}>
      {children}
    </HeaderSection>
  );
};

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Pane = function HeaderPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Header.Logo = function HeaderLogo({ to, fixed, alt, children, ...restProps }) {
  return (
    <Link to={to}>
      <Img fixed={fixed} alt={alt} {...restProps} />
    </Link>
  );
};

Header.Button = function HeaderButton({ href, children, ...restProps }) {
  return (
    <Button href={href} {...restProps}>
      {children}
    </Button>
  );
};

export default Header;
