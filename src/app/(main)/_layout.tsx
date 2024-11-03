import React from "react";
import { Drawer } from "expo-router/drawer";
import { View, Text, Pressable, StatusBar } from "react-native";
import { router, useNavigation, usePathname, useRouter } from "expo-router";
import { Image } from "expo-image";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

const DrawerLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Drawer
        screenOptions={{
          headerShown: true,
          swipeEdgeWidth: 0,
          headerStyle: {
            backgroundColor: "#3559E0",
            shadowOpacity: 0, // For iOS
            elevation: 0, // For Android
            borderBottomWidth: 0, // For iOS
          },

          drawerStyle: {
            width: "90%",
          },

          headerTitle: () => (
            <View>
              <Text className="text-[30px] font-medium text-[#000000]">
                WAISPARENT
              </Text>
            </View>
          ),

          headerLeft: () => (
            <Pressable
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}
              className="pl-4"
            >
              <Ionicons name="menu" size={24} color="white" />
            </Pressable>
          ),

          headerRight: () => (
            <Pressable className=" pr-4">
              <FontAwesome6 name="bell" size={20} color="white" />
            </Pressable>
          ),
        }}
        initialRouteName="(drawer)"
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />

        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            title: "About Us",
          }}
        />

        <Drawer.Screen
          name="faqs"
          options={{
            drawerLabel: "Faqs",
            title: "Faqs",
          }}
        />

        <Drawer.Screen
          name="notification"
          options={{
            drawerLabel: "Notification",
            title: "Notification",
          }}
        />
      </Drawer>
    </>
  );
};

export default DrawerLayout;
