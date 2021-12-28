import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'

type HeadingProps = TypographyProps &
  SpaceProps &
  ColorProps &
  HTMLAttributes<HTMLHeadingElement> & {
    as?: 'string'
  }

const HeadingElement: React.FC<HeadingProps> = styled.h1(typography, space, color)

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => (
  <HeadingElement {...props}>{children}</HeadingElement>
)

Heading.defaultProps = {
  fontFamily: 'October Crow',
  fontSize: 48,
  textAlign: 'center',
  color: '#ECC839',
  mt: 0
}

export { Heading }
