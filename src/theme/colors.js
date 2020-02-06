export default function() {
  const colors = {
    // Global Colors
    dark: 'black',
    light: 'white',
    alternate: '#edf0f0', // grey background
    opacity: {
      strong: 0.8,
      medium: 0.4,
      weak: 0.1,
    },
    // Component Colors
    button: {
      borderBottomColor: '#c2d0cc',
      background: '#d1d5d5',
      color: '#2e3030',
      activeBackground: '#dce0e0',
      activeBorderColor: '#b5b7b7',
      disabledBackground: '#e8ebeb',
      disabledBorderColor: '#cfd1d1',
      disabledColor: '#666969',
      // primary
      primary: {
        borderBottomColor: '#dbae1f',
        background: '#fed40b',
        color: '#2e3030',
        activeBackground: '#edde74',
        activeBorderColor: '#e1c260',
        disabledBackground: '#f2ebb2',
        disabledBorderColor: '#eddfb2',
      },
    },
  }

  return colors
}
