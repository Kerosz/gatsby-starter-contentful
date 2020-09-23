import React from "react";

import { HeaderSection, Container } from "./styles/header";

const Header = ({ children, ...restProps }) => {
  return <HeaderSection {...restProps}>{children}</HeaderSection>;
};

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

export default Header;
