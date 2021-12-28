import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

type ButtonProps = ShadowProps &
  LayoutProps &
  SpaceProps &
  BorderProps &
  ColorProps &
  TypographyProps &
  HTMLAttributes<HTMLButtonElement>

const ButtonElement: React.FC<ButtonProps> = styled.button(color, layout, border, space, typography, shadow)

const Button: React.FC<ButtonProps> = ({ children, ...props }) => <ButtonElement {...props}>{children}</ButtonElement>

Button.defaultProps = {
  bg: '#2b0e11',
  border: '1px solid #ee9430',
  borderRadius: 8,
  boxShadow: '0px 0px 8px #B63C00',
  fontFamily: 'Open Sans',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: '22px',
  color: '#fff',
  height: 40,
  width: 300,
  mx: 'auto',
  display: 'block'
}

export { Button }
