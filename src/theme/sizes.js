export default function(baseSpacing = 24, scale = 6) {
  // 24
  const baseFontSize = baseSpacing * 0.75 // 18
  const fontScale = baseSpacing / scale // 4

  const fontSizing = factor => ({
    size: `${baseFontSize + factor * fontScale}px`,
    height: `${baseSpacing + factor * fontScale}px`,
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`,
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
