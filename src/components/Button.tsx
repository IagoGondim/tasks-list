import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.colors.PrimaryColor};
  border: none;
  border-radius: 15px;
  color: ${(props) => props.theme.colors.SecondaryBg};
  height: 2.5rem;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 1rem;
  transition: all 300ms ease-in-out;
  cursor: pointer;
`;

export default Button;
