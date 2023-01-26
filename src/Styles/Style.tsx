import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.PrimaryBg};
  transition: all 300ms ease-in-out;
`;

export const Wrapper = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: -200px;
`;

export const TabButton = styled(NavLink)`
  align-items: center;
  background: ${(props) => props.theme.colors.SecondaryBg};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.PrimaryColor};
  display: flex;
  height: 62px;
  justify-content: center;
  text-decoration: none;
  width: 120px;
  transition: all 300ms ease-in-out;
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &.active {
    background: ${(props) => props.theme.colors.PrimaryColor};
    color: ${(props) => props.theme.colors.SecondaryBg};
    scale: 1.2;
    transition: all 300ms ease-in-out;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;
