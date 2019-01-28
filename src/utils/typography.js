import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Barlow", "Nunito", "sans-serif"],
  bodyFontFamily: ["Barlow", "Nunito", "sans-serif"]
});

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
