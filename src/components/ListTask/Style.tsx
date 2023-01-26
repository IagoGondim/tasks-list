import styled from "styled-components";
import IconButton from "../IconButton";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 600px;
`;

export const List = styled.div`
  background-color: ${(props) => props.theme.colors.SecondaryBg};
  transition: all 300ms ease-in-out;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 45px 24px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 400px;
`;

export const ListItem = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 4px 0;
  color: ${(props) => props.theme.colors.PrimaryColor};
  transition: all 300ms ease-in-out;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DeleteButton = styled(IconButton)`
  cursor: pointer;
  visibility: hidden;
  ${ListItem}:hover & {
    visibility: visible;
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.SecondaryBg};
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.PrimaryColor};
  padding: 20px 24px;
  transition: all 300ms ease-in-out;
`;
