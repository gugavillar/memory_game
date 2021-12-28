import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, typography, TypographyProps } from 'styled-system'

type ParagraphProps = ColorProps & SpaceProps & TypographyProps & HTMLAttributes<HTMLParagraphElement>

const ParagraphElement: React.FC<ParagraphProps> = styled.p(color, space, typography)

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => (
  <ParagraphElement {...props}>{children}</ParagraphElement>
)

Paragraph.defaultProps = {
  fontFamily: 'Open Sans',
  fontWeight: 400,
  fontSize: 16,
  textAlign: 'center',
  lineHeight: '26px',
  color: '#fff',
  mt: 24,
  mb: 55
}

export { Paragraph }
