export default {
  grid: {
    container: "130rem",
    containerContent: "70rem",
    containerForm: "41.8rem",
    gutter: "3.2rem"
  },
  border: {
    radius: "0.4rem"
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: "0.8rem",
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.4rem",
      huge: "3.5rem"
    }
  },
  colors: {
    primary: "#F231A5",
    secondary: "#038bbb",
    mainBg: "#06092B",
    lightBg: "#F2F2F2",
    white: "#FAFAFA",
    black: "#030517",
    lightGray: "#EAEAEA",
    gray: "#8F8F8F",
    darkGray: "#2E2F42",
    red: "#FF6347",
    green: "#36802d",
    blue: "#386dbd",
    darkBlue: "#020f59"
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem"
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out"
  }
} as const;
