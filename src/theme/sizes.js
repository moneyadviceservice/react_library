export default function(baseSpacing = 24, scale = 6) {
  // 24
  const baseFontSize = baseSpacing * 0.75 // 18
  const fontScale = baseSpacing / scale // 4

  const fontSizing = factor => ({
    size: `${baseFontSize + factor * fontScale}px`,
    height: `${baseSpacing + factor * fontScale}px`,
  })

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
          xs: { ...fontSizing(4) },
          md: { ...fontSizing(6) },
          lg: { ...fontSizing(12) },
          xl: { ...fontSizing(16) },
        },
        2: {
          xs: { ...fontSizing(2) },
          md: { ...fontSizing(4) },
          lg: { ...fontSizing(8) },
          xl: { ...fontSizing(10) },
        },
        3: {
          xs: { ...fontSizing(1) },
          md: { ...fontSizing(2) },
          lg: { ...fontSizing(4) },
          xl: { ...fontSizing(6) },
        },
        4: {
          xs: { ...fontSizing(0) },
          md: { ...fontSizing(1) },
          lg: { ...fontSizing(2) },
        },
        5: {
          xs: { ...fontSizing(-0.5) },
          md: { ...fontSizing(0) },
          lg: { ...fontSizing(1) },
        },
        6: {
          xs: { ...fontSizing(-1) },
          md: { ...fontSizing(-0.5) },
          lg: { ...fontSizing(0) },
        },
      },
      weight: 600,
    },
    text: {
      xsmall: { ...fontSizing(-1.5) },
      small: { ...fontSizing(-1) },
      medium: { ...fontSizing(0) }, // 18px
      large: { ...fontSizing(1) }, // 22px
      xlarge: { ...fontSizing(2) },
      xxlarge: { ...fontSizing(4) },
    },
  }

  return sizes
}
