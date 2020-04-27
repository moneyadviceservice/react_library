export default function(baseSpacing = 24) {
  const borderWidth = 2

  const headingSizing = (fontSize, lineHeight) => ({
    size: `${fontSize / 16}rem`,
    height: `${lineHeight / 16}rem`,
    marginTop: `${fontSize / 16}rem`,
    marginBottom: `${fontSize / 2 / 16}rem`,
  })

  const paragraphSizing = (fontSize, lineHeight) => ({
    size: `${fontSize / 16}rem`,
    height: `${lineHeight / 16}rem`,
    marginTop: 0,
    marginBottom: `${(fontSize - 6) / 16}rem`,
  })

  const sizes = {
    baseUnit: 0.375,
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
        vertical: `12px`,
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
          md: { ...headingSizing(40, 42) },
        },
        2: {
          xs: { ...headingSizing(24, 30) },
          md: { ...headingSizing(28, 36) },
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
        md: { ...paragraphSizing(18, 24) },
      },
    },
  }

  return sizes
}
