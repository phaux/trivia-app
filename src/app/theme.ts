export const theme = {
  color: {
    text: {
      light: {
        primary: "#4953BE",
        secondary: "#4953BE70",
      },
      dark: {
        primary: "white",
        secondary: "#FFFFFF70",
      },
    },
    background: {
      light: {
        primary: "white",
      },
      dark: {
        primary: "#4751c0",
      },
    },
    accent: {
      light: "#f7a491",
      dark: "#ff6165",
      shadow: "#c65252",
      background: "#ffdbdb",
    },
  },
};

type AppTheme = typeof theme;

declare module "@emotion/react" {
  interface Theme extends AppTheme {}
}
