export const headingSizing = (fontSize, lineHeight) => ({
  size: `${fontSize / 16}rem`,
  height: `${lineHeight / 16}rem`,
  marginTop: `${fontSize / 16}rem`,
  marginBottom: `${fontSize / 2 / 16}rem`,
})

export const paragraphSizing = (fontSize, lineHeight) => ({
  size: `${fontSize / 16}rem`,
  height: `${lineHeight / 16}rem`,
  marginTop: 0,
  marginBottom: `${(fontSize - 6) / 16}rem`,
})
