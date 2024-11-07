import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Define types for KidItem props
type KidItemProps = {
  name: string;
  device: string;
  battery: number;
};

// Define types for AppActivityItem props
type AppActivityItemProps = {
  appName: string;
  usage: string;
};

const KidItem: React.FC<KidItemProps> = ({ name, device, battery }) => (
  <View style={styles.kidItem}>
    <Image
      source={{ uri: "https://via.placeholder.com/40" }}
      style={styles.avatar}
    />
    <View style={styles.kidInfo}>
      <Text style={styles.kidName}>{name}</Text>
      <Text style={styles.deviceInfo}>
        {device} - {battery}% Battery
      </Text>
    </View>
    <Ionicons name="ellipsis-vertical" size={24} color="#666" />
  </View>
);

const AppActivityItem: React.FC<AppActivityItemProps> = ({
  appName,
  usage,
}) => (
  <View style={styles.appItem}>
    <View style={styles.appIconPlaceholder} />
    <Text style={styles.appName}>{appName}</Text>
    <Text style={styles.appUsage}>{usage}</Text>
  </View>
);

const MyKidsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.profilePic}
        />
        <Text style={styles.headerText}>Morning! Karla</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Kids</Text>
          <TouchableOpacity>
            <Text style={styles.addButton}>Add Member +</Text>
          </TouchableOpacity>
        </View>
        <KidItem
          name="Hans Christian"
          device="iPhone 12 Pro Max"
          battery={85}
        />
        <KidItem name="Angelo Q" device="iPad Air" battery={92} />
        <KidItem name="Dan Russel" device="iPhone 11" battery={78} />
        <KidItem name="Jerome Teves" device="iPhone SE" battery={65} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Activity:</Text>
        <AppActivityItem appName="Google Chrome" usage="2hr 5 mins" />
        <AppActivityItem appName="Instagram" usage="1hr 30 mins" />
        <AppActivityItem appName="Facebook" usage="45 mins" />
        <AppActivityItem appName="WhatsApp" usage="20 mins" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    color: "#4CAF50",
    fontWeight: "bold",
  },
  kidItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  kidInfo: {
    flex: 1,
  },
  kidName: {
    fontWeight: "bold",
  },
  deviceInfo: {
    color: "#666",
    fontSize: 12,
  },
  appItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  appIconPlaceholder: {
    width: 30,
    height: 30,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginRight: 10,
  },
  appName: {
    flex: 1,
  },
  appUsage: {
    color: "#666",
  },
});

export default MyKidsScreen;
