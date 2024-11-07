import React from "react";
import { Drawer } from "expo-router/drawer";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router, useNavigation } from "expo-router"; // Ensure router is imported from expo-router
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

const CustomDrawerContent = (props: DrawerContentComponentProps) => (
  <View style={styles.drawerContainer}>
    {/* Profile Section */}
    <View style={styles.profileSection}>
      <Text style={styles.profileName}>Karla Finley</Text>

      <Pressable onPress={() => router.navigate("/profile")}>
        <Text style={styles.profileSubtext}>Edit Profile</Text>
      </Pressable>
    </View>

    {/* Menu Items */}
    <View style={styles.menuContainer}>
      <Pressable
        onPress={() => router.navigate("/home")}
        style={styles.menuItem}
      >
        <Text style={styles.menuText}>HOME</Text>
      </Pressable>

      <Pressable
        onPress={() => router.navigate("/faqs")}
        style={styles.menuItem}
      >
        <Text style={styles.menuText}>FAQ</Text>
      </Pressable>

      <Pressable
        onPress={() => router.navigate("/terms-condition")}
        style={styles.menuItem}
      >
        <Text style={styles.menuText}>TERMS & CONDITIONS</Text>
      </Pressable>

      <Pressable
        onPress={() => router.navigate("/feedback")}
        style={styles.menuItem}
      >
        <Text style={styles.menuText}>FEEDBACK</Text>
      </Pressable>

      <Pressable
        onPress={() => router.navigate("/about-us")}
        style={styles.menuItem}
      >
        <Text style={styles.menuText}>ABOUT US</Text>
      </Pressable>

      <Pressable onPress={() => router.navigate("/")} style={styles.menuItem}>
        <Text style={styles.menuText}>LOGOUT</Text>
      </Pressable>
    </View>
  </View>
);
const DrawerLayout = () => {
  const navigation = useNavigation();

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        swipeEdgeWidth: 0,

        headerStyle: {
          backgroundColor: "#3559E0",
          shadowOpacity: 0,
          elevation: 0,
          borderBottomWidth: 0,
        },
        drawerStyle: {
          width: "90%",
          backgroundColor: "#f5f5f5",
        },
        headerTitle: () => <Text style={styles.headerTitle}>WAISPARENT</Text>,

        headerLeft: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.headerButton}
          >
            <Ionicons name="menu" size={24} color="white" />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable
            onPress={() => router.navigate("/notification")}
            style={styles.headerButton}
          >
            <FontAwesome6 name="bell" size={16} color="white" />
          </Pressable>
        ),
      }}
      drawerContent={CustomDrawerContent}
      initialRouteName="(drawer)"
    >
      <Drawer.Screen name="home" options={{ drawerLabel: "Home" }} />
      <Drawer.Screen name="profile" options={{ drawerLabel: "Profile" }} />
      <Drawer.Screen name="faqs" options={{ drawerLabel: "Faqs" }} />
      <Drawer.Screen
        name="notification"
        options={{
          drawerItemStyle: { display: "none" },
          drawerLabel: "Notification",
        }}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    marginTop: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  profileSubtext: {
    fontSize: 14,
    color: "#666",
  },
  menuContainer: {
    marginBottom: 30,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000000",
  },
  headerButton: {
    padding: 15,
  },
});

export default DrawerLayout;
