import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack initialRouteName="(auth)">
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}
