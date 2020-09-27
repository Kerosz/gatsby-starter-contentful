import styled, { css } from 'styled-components/macro';

export const HeaderSection = styled.section`
  width: 100%;
  height: 9rem;

  ${({ bg }) =>
    bg &&
    css`
      background: ${bg};
    `};
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: inherit;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Pane = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.a`
  width: 13.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors.accentOne};
  color: ${(props) => props.theme.colors.darkBg};
  border-radius: 0.5rem;
  border: 0.5rem solid ${(props) => props.theme.colors.accentOne};
  transition: background 250ms;

  &:hover,
  &:focus {
    background: transparent;
  }
`;
