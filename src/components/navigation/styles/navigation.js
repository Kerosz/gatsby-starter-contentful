import styled from 'styled-components/macro';

export const Container = styled.nav`
  display: flex;
  margin-left: 9.5rem;
`;

export const List = styled.ul`
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 20rem;
  background: ${(props) => props.theme.colors.lightBg};
  opacity: 0;
  pointer-events: none;
  transition: inherit;

  box-shadow: ${(props) => props.theme.shadows.shadowTwo};
`;

export const Title = styled.div`
  position: relative;
  margin-right: 2rem;
  padding: 1rem;
  transition: all 75ms ease;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover ${List} {
    opacity: 1;
    pointer-events: all;
    transform: translateY(4rem);
  }
`;

export const Item = styled.li`
  width: 100%;
`;
