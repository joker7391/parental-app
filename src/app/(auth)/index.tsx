import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function Index() {
  const router = useRouter();

  console.log(router);
  return (
    <View>
      <Button
        title="Login"
        onPress={() => {
          router.push("/(main)/home");
        }}
      />
    </View>
  );
}
