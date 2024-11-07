import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Notification {
  id: number;
  type: "chrome" | "facebook" | "instagram";
  message: string;
  time: string;
}

interface NotificationData {
  [key: string]: Notification[];
}

// Sample notification data
const notifications: NotificationData = {
  "HANS CHRISTIAN": [
    {
      id: 1,
      type: "chrome",
      message: "New browser activity detected",
      time: "2h ago",
    },
    { id: 2, type: "facebook", message: "New friend request", time: "3h ago" },
    {
      id: 3,
      type: "instagram",
      message: "Your post received 100 likes",
      time: "5h ago",
    },
    {
      id: 4,
      type: "instagram",
      message: "New follower request",
      time: "6h ago",
    },
    { id: 5, type: "facebook", message: "Birthday reminder", time: "8h ago" },
    {
      id: 6,
      type: "instagram",
      message: "Your story was viewed by 50 people",
      time: "9h ago",
    },
  ],
  "DAN RUSSEL": [
    { id: 7, type: "chrome", message: "Sync completed", time: "1h ago" },
    {
      id: 8,
      type: "facebook",
      message: "New group invitation",
      time: "4h ago",
    },
    {
      id: 9,
      type: "instagram",
      message: "Comment on your photo",
      time: "7h ago",
    },
  ],
};

export default function NotificationsScreen(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("HANS CHRISTIAN");

  const renderIcon = (type: Notification["type"]) => {
    switch (type) {
      case "chrome":
        return <Icon name="google-chrome" size={24} color="#4285F4" />;
      case "facebook":
        return <Icon name="facebook" size={24} color="#1877F2" />;
      case "instagram":
        return <Icon name="instagram" size={24} color="#E4405F" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>NOTIFICATIONS</Text>

      <View style={styles.tabContainer}>
        {Object.keys(notifications).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.notificationList}>
        {notifications[activeTab].map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              {renderIcon(notification.type)}
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.message}>{notification.message}</Text>
              <Text style={styles.time}>{notification.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#F0F0F0",
  },
  activeTab: {
    backgroundColor: "#E4405F",
  },
  tabText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#666",
  },
  activeTabText: {
    color: "#FFF",
  },
  notificationList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
});
