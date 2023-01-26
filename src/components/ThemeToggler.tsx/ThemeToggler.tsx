import React from "react";
import styled from "styled-components";
import IconSun from "../../images/icon-sun.svg";
import IconMoon from "../../images/icon-moon.svg";
import Light from "../../Styles/themes/Light";
import Dark from "../../Styles/themes/Dark";
import { ImageButton } from "./Style";

export const ToggleButton = styled(ImageButton)`
  width: 2.6rem;
  height: 2.6rem;
  margin-bottom: 14px;
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

const ThemeToggler = ({ theme, setTheme }: { theme: any; setTheme: any }) => {
  const themeToggleHandler = () => {
    setTheme(theme.id === "light" ? Dark : Light);
  };

  return (
    <ToggleButton onClick={themeToggleHandler}>
      {theme.id === "dark" ? (
        <img src={IconMoon} alt="Theme switcher icon" />
      ) : (
        <img src={IconSun} alt="Theme switcher icon" />
      )}
    </ToggleButton>
  );
};

export default ThemeToggler;
