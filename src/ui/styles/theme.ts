const theme = {
  breaks: {
    minimobile: "max-width: 340px",
    mobile: "max-width: 767px",
    tablet: "768px <= width <= 1024px",
    desktop: "min-width: 1024px",
    xs: "min-width: 0px",
    sm: "min-width: 576px",
    md: "min-width: 768px",
    lg: "min-width: 992px",
    xl: "min-width: 1200px",
    xxl: "min-width: 1400px",
  },
  colors: {
    backgrounds: {
      primary: "#202020",
      secondary: "#DFF3EC",
      tertiary: "#6c6c6c",
      quaternary: "#ccba8d",
      quinary: "#f0f0f0",
      sextenary: "#A4B8B0",
      septenary: "#527165",
    },
    text: {
      primary: "#202020",
      secondary: "#ccba8d",
      tertiary: "#ccba8d",
      quaternary: "#999999",
      quinary: "#ccba8d",
    },
    border: {
      colors: {
        primary: "#CDE6DB",
        secundary: "#ccba8d",
        terciary: "#202020",
        quaternary: "#E0E0E0",
        quinary: "#BCBEC0",
      },
    },
  },
  sizes: {
    font: {
      primary: "1rem",
      secundary: "1.25rem",
      terciary: "1.75rem",
    },
    border: {
      primary: "2px",
      secundary: "1px",
      radius: {
        primary: "9px",
        secudary: "36px",
        teriary: "25px",
      },
    },
  },
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Roboto', sans-serif",
  },
};

export default theme;
