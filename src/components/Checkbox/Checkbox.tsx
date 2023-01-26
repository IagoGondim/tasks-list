import { StyledComponent } from "styled-components";
import React, { ComponentProps } from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from "./Style";

type Props = ComponentProps<StyledComponent<"input", any, {}>>;

const Checkbox: React.FC<Props> = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox {...props} type="checkbox" checked={checked} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);

export default Checkbox;
