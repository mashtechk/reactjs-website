import theme from "@rebass/preset"

const customTheme = {
  ...theme,
  breakpoints: [320, 768, 1024, 1440],
  colors: {
    darkBlue: "#0C1D60",
    lightBlue: "#7BD5F5",
    gold: "#F7D663",
    white: "#FFF",
  },
  fonts: {
    body: "Avenir, Helvetica, Arial, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [
    "0.75rem",
    "1rem",
    "1.333rem",
    "1.777rem",
    "2.369rem",
    "3.157rem",
    "4.209rem",
    "5.61rem",
    "7.478rem",
    "9.969rem",
    "13.288rem",
    "17.713rem",
    "23.612rem",
    "31.475rem",
    "41.956rem",
    "55.927rem",
    "74.551rem",
    "99.376rem",
  ],
  fontWeights: {
    thin: 100,
    body: 400,
    hero: 600,
    heading: 900,
    bold: 900,
  },
  lineHeights: {
    body: 1.333,
    heading: 1,
  },
  space: [
    "0.665rem",
    "1.33rem",
    "2.66rem",
    "5.32rem",
    "10.64rem",
    "21.28rem",
    "42.56rem",
    "85.12rem",
  ],
  variants: {
    nav: {
      mx: 1,
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      color: "white",
      textDecoration: "none",
      transition: "400ms ease all",
      textTransform: "uppercase",

      ":first-child": { ml: "0px" },

      ":last-child": { mr: "0px" },

      ":after": {
        content: '""',
        display: "block",
        width: 0,
        height: 2,
        background: "gold",
        transition: "width 300ms",
      },

      ":hover": {
        color: "gold",

        ":after": {
          width: "100%",
        },
      },
    },
  },
}

export default customTheme
