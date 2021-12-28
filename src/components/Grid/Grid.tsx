import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { grid, GridProps, layout, LayoutProps, space, SpaceProps } from 'styled-system'

type GridContainerProps = SpaceProps & LayoutProps & GridProps & HTMLAttributes<HTMLDivElement>

const GridElement: React.FC<GridContainerProps> = styled.div(space, layout, grid)

const Grid: React.FC<GridContainerProps> = ({ children, ...props }) => <GridElement {...props}>{children}</GridElement>

Grid.defaultProps = {
  display: 'grid',
  mt: 50,
  width: 1120,
  mx: 'auto',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  gridGap: 30,
  overflow: 'hidden'
}

export { Grid }
