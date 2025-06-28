import { Slot } from "expo-router";

export default function RootLayout() {
  /*
    Slot:
    a placeholder where child routes (screens) will be rendered
    inside a layout file.
    It’s similar to children in React, but more powerful
    because it's aware of the routing structure.
   */
  return <Slot />;
}
