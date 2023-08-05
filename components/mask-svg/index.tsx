import styled from '@emotion/styled'
import { Box, BoxProps } from '@mui/material'

interface Props extends BoxProps {
  width: string
  height: string
  src: string
  background?: string
  backgroundColor?: string
  hoverColor?: string
  alt?: string
}

const Component = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'backgroundColor' &&
    prop !== 'background' &&
    prop !== 'hoverColor',
})<Props>`
  ${(props) => `
        width: ${props.width};
        height: ${props.height};
        mask: url(${props.src});
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        ${
          props.background
            ? `
          background: ${props.background};
        `
            : ''
        };
        ${
          props.backgroundColor
            ? `
          background-color: ${props.backgroundColor};
        `
            : ''
        };
        
        &:hover {
            background-color: ${props.hoverColor || props.backgroundColor};
        }
    `}
`

export default function MaskSVG(props: Props) {
  return (
    <Component className="mask-svg" {...props}>
      {props.children || <></>}
    </Component>
  )
}
