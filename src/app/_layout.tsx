import "../../global.css";
import { Slot } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import AuthContextProvider from "@/providers/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout() {
  const queryClientt = new QueryClient();
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
      <QueryClientProvider client={queryClientt}>
        <AuthContextProvider>
          <Slot />
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
