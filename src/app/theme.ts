export const theme = {
  color: {
    text: {
      primary: "black",
      secondary: "white",
    },
    background: {
      primary: "white",
      secondary: "#4751c0",
    },
    accent: {
      light: "#f7a491",
      dark: "#ff6165",
      shadow: "#c65252",
    },
  },
};

type AppTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme extends AppTheme {}
}
