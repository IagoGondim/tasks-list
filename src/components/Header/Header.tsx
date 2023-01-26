import React from "react";
import { StyledHeader, HeaderWrapper, Heading } from "./Style";
import ThemeToggler from "../ThemeToggler.tsx/ThemeToggler";

const Header = ({ theme, setTheme }: { theme: any; setTheme: any }) => {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Heading>Tasks</Heading>
        <ThemeToggler theme={theme} setTheme={setTheme} />
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
