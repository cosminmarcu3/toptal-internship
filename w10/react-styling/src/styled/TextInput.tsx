import { InputHTMLAttributes } from "react"
import styled from "styled-components"
import { themes } from "./pallete"

type StyledTextInputProps = {
  fullWidth?: boolean
  invalid?: boolean
}

type TextInputProps = InputHTMLAttributes<HTMLInputElement> &
  StyledTextInputProps

const getFocusColor = ({ invalid }: StyledTextInputProps) =>
  invalid ? themes.danger : themes.primary

const StyledTextInput = styled.input<StyledTextInputProps>`
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid;
  outline: none;
  border-radius: 0.35rem;
  transition: 0.3s;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border-color: ${({ invalid }) => (invalid ? themes.danger : themes.black)};
  &:focus {
    border-color: ${getFocusColor};
    box-shadow: 0 0 0 0.2rem ${getFocusColor}50;
  }
`

const TextInput = ({ fullWidth, ...props }: TextInputProps) => (
  <StyledTextInput type="text" fullWidth={fullWidth} {...props} />
)

export default TextInput
