import React from "react";

import { FooterSection, Container } from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
  return <FooterSection {...restProps}>{children}</FooterSection>;
};

Footer.Container = function FooterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

export default Footer;
