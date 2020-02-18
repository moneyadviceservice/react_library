import { headingSizing, paragraphSizing } from '../utils/helpers'

export default function(baseSpacing = 24, scale = 6) {
  const borderWidth = 2

  const sizes = {
    edgeSize: {
      none: '0px',
      xxsmall: '2px',
      xsmall: `${baseSpacing / 8}px`, // 3
      small: `${baseSpacing / 4}px`, // 6
      medium: `${baseSpacing / 2}px`, // 12
      large: `${baseSpacing}px`, // 24
      xlarge: `${baseSpacing * 2}px`, // 48
    },
    borderSize: {
      none: 'none',
      xxsmall: '.5px',
      xsmall: '1px',
      small: '2px',
      medium: `${baseSpacing / 6}px`, // 4
      large: `${baseSpacing / 2}px`, // 12
      xlarge: `${baseSpacing}px`, // 24
    },
    size: {
      xxsmall: `${baseSpacing * 2}px`, // 48
      xsmall: `${baseSpacing * 4}px`, // 96
      small: `${baseSpacing * 8}px`, // 192
      medium: `${baseSpacing * 16}px`, // 384
      large: `${baseSpacing * 32}px`, // 768
      xlarge: `${baseSpacing * 48}px`, // 1152
      xxlarge: `${baseSpacing * 64}px`, // 1536
      full: '100%',
    },
    button: {
      border: {
        size: 'none',
        radius: `${baseSpacing / 6}px`,
      },
      padding: {
        vertical: `${baseSpacing / 3}px`, //8px
        horizontal: `${baseSpacing - borderWidth}px`, //22px
      },
      paddingMd: {
        vertical: `${baseSpacing / 2}px`,
        horizontal: `${baseSpacing - borderWidth}px`,
      },
    },
    heading: {
      level: {
        1: {
          xs: { ...headingSizing(32, 26) },
          md: { ...headingSizing(40, 42) }, // 1024px
        },
        2: {
          xs: { ...headingSizing(24, 30) },
          md: { ...headingSizing(28, 36) }, // 1024px
        },
        3: {
          xs: { ...headingSizing(22, 30) },
        },
        4: {
          xs: { ...headingSizing(16, 24) },
        },
        5: {
          xs: { ...headingSizing(14, 20) },
        },
        6: {
          xs: { ...headingSizing(12, 18) },
        },
      },
      weight: 700,
    },
    paragraph: {
      sizing: {
        xs: { ...paragraphSizing(16, 24) },
        md: { ...paragraphSizing(18, 24) }, // 1024px
      },
    },
  }

  return sizes
}
