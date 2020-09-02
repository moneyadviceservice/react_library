const masGreen = '#428513'

export default function() {
  const colors = {
    // Global Colors
    alternate: '#edf0f0', // grey background
    black: '#000000',
    disabledText: '#b7b7b7', // grey disabled
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
    accordion: {
      default: '#3c97bf',
    },
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
    companyCard: {
      default: '#003d8e',
      cardBorder: '#edf0f2',
      boxShadow: '#d7d7d7',
      titleBorder: '#edf0f0',
    },
    form: {
      disabledBackground: '#F3F3F3',
      disabledText: '#686C6C',
      inputBorder: '#515151',
      inputFocus: '#e8b940',
    },
    formfield: {
      legendText: masGreen,
    },
    header: {
      background: masGreen,
    },
    infotable: {
      default: '#24afa8',
    },
    tooltip: {
      tipBackground: '#FFFFFF',
      iconColor: masGreen,
      iconBackground: '#e3fbe3',
    },
  }

  return colors
}
