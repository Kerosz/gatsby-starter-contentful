import { Link } from 'gatsby';
import React from 'react';

import { Container, Title, List, Item } from './styles/navigation';

export default function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navigation.Title = function NavigationTitle({ to, children, ...restProps }) {
  return to ? (
    <Title {...restProps}>
      <Link to={to}>{children}</Link>
    </Title>
  ) : (
    <Title {...restProps}>{children}</Title>
  );
};

Navigation.List = function NavigationList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Navigation.Item = function NavigationItem({ to, children, ...restProps }) {
  return to ? (
    <Item {...restProps}>
      <Link to={to}>{children}</Link>
    </Item>
  ) : (
    <Item {...restProps}>{children}</Item>
  );
};
