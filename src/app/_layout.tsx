import { Stack } from "expo-router";

import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <Stack initialRouteName="(auth)">
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}
