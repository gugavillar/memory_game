import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps
} from 'styled-system'

type BoxContainerProps = HTMLAttributes<HTMLDivElement> &
  LayoutProps &
  ShadowProps &
  SpaceProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  TypographyProps

const BoxElement: React.FC<BoxContainerProps> = styled.div(layout, shadow, space, border, color, flexbox, typography)

const Box: React.FC<BoxContainerProps> = ({ children, ...props }) => <BoxElement {...props}>{children}</BoxElement>

Box.defaultProps = {
  width: 160,
  height: 160,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ecc839',
  fontFamily: 'October Crow',
  fontSize: 72,
  lineHeight: 82
}

export { Box }
