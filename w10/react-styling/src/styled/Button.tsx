import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { themes } from "./pallete";

type StyledElementProps = {
  variant?: keyof typeof themes;
  fullWidth?: boolean;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyledElementProps;

const getCurrentThemedColor = ({ variant = "primary" }: StyledElementProps) =>
  themes[variant];

const StyledButton = styled.button<StyledElementProps>`
  padding: 0.5rem 1.5rem;
  border-radius: 0.35rem;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
  border: none;
  background-color: ${getCurrentThemedColor};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  color: ${({ variant = "primary" }) =>
    variant === "white" ? themes.black : themes.white};
  &:focus {
    box-shadow: 0 0 0 0.2rem ${getCurrentThemedColor}50;
  }
`;

const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
