import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 50vh;
`;
export const Task = styled.div`
  align-items: center;
  width: 600px;
  color: ${(props) => props.theme.colors.PrimaryColor};
  background: ${(props) => props.theme.colors.SecondaryBg};
  border-radius: 5px;
  display: flex;
  flex: 1;
  font-size: 32px;
  justify-content: center;
  padding: 1rem;

  transition: all 300ms ease-in-out;
`;

export const TextP = styled.p`
  color: ${(props) => props.theme.colors.PrimaryColor};
  transition: all 300ms ease-in-out;
`;
