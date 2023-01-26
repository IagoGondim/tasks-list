import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 25rem;
  padding: 2.4rem;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 20rem;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  max-width: 600px;
  margin-top: 5.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.PrimaryColor};
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 1.1rem;
  transition: all 300ms ease-in-out;
  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 1.5rem;
  }
`;
