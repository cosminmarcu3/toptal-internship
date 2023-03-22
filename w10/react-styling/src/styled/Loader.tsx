import styled, { keyframes } from "styled-components"
import { themes } from "./pallete"

type LoaderProps = {
  size?: "s" | "m" | "l"
  variant?: keyof typeof themes
}

const pixelsSizeRatio = {
  s: "25px",
  m: "50px",
  l: "75px",
}

const getPixelsBasedOnSize = ({ size = "s" }: LoaderProps) =>
  pixelsSizeRatio[size]

const getBorderWidthBasedOnSize = ({ size = "s" }: LoaderProps) => {
  const loaderSize = parseInt(getPixelsBasedOnSize({ size }))

  return `${loaderSize / 2.5}px`
}

const spinAnimation = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const StyledLoader = styled.div<LoaderProps>`
  border: ${getBorderWidthBasedOnSize} solid ${themes.white};
  border-radius: 50%;
  border-top: ${getBorderWidthBasedOnSize} solid
    ${({ variant = "primary" }) => themes[variant]};
  width: ${getPixelsBasedOnSize};
  height: ${getPixelsBasedOnSize};
  animation: ${spinAnimation} 1s linear infinite;
`

const Loader = (props: LoaderProps) => <StyledLoader {...props} />

export default Loader
