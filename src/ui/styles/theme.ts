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
      primary: "#F3FAF6",
      secondary: "#DFF3EC",
      tertiary: "#ffffff",
      quaternary: "#12b072",
      quinary: "#f0f0f0",
      sextenary: "#A4B8B0",
      septenary: "#527165",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#12b072",
      tertiary: "#666666",
      quaternary: "#999999",
      quinary: "#ffffff",
    },
    border: {
      colors: {
        primary: "#CDE6DB",
        secundary: "#12b072",
        terciary: "#A9C8B8",
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
