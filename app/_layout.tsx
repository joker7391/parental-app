import React from "react";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="profile" options={{ title: "Profile" }} />
    </Drawer>
  );
}
