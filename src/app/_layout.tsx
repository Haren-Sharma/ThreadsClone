import "../../global.css";
import { Slot } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import AuthContextProvider from "@/providers/AuthContextProvider";

export default function RootLayout() {
  const myTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "white",
      card: "#101010", //background color of the header and footer
    },
  };
  /*
    Slot:
    a placeholder where child routes (screens) will be rendered
    inside a layout file.
    It’s similar to children in React, but more powerful
    because it's aware of the routing structure.
   */
  return (
    <ThemeProvider value={myTheme}>
      <AuthContextProvider>
        <Slot />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
