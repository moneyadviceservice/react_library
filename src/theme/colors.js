export default function() {
  const colors = {
    // Global Colors
    alternate: '#edf0f0', // grey background
    black: '#000000',
    focusBg: '#daaf2d',
    mapsBlue: '#143960',
    white: '#FFFFFF',
    // Opacity Values
    opacity: {
      strong: 0.8,
      medium: 0.4,
      weak: 0.1,
    },
    // Component Colors
    anchor: {
      default: '#003d8e',
      focusBg: '#e8b940',
      outline: '#daaf2d',
    },
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
      // blog
      blog: {
        masBlue: '#0076ab',
        masBlueDark: '#18507a',
      },
    },
    form: {
      disabledBackground: '#F3F3F3',
      disabledText: '#686C6C',
      inputBorder: '#515151',
      inputFocus: '#e8b940',
    },
    formfield: {
      legendText: '#2e3030',
    },
    header: {
      background: '#428513',
    },
  }

  return colors
}
