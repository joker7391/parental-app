import { View, Text, ScrollView } from "react-native";

export default function Component() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View
        style={{
          maxWidth: 800,
          alignSelf: "center",
          backgroundColor: "white",
          borderRadius: 8,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },
        }}
      >
        <View style={{ padding: 24 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            ABOUT US
          </Text>

          <View style={{ marginBottom: 24 }}>
            <Text style={{ color: "#4B5563", marginBottom: 12 }}>
              <Text style={{ fontWeight: "600", color: "#1F2937" }}>
                WaisParent
              </Text>
              , we understand that in today's digital age, parenting goes beyond
              the physical world—into the devices and screens our children use
              every day. That's why we've developed WaisParent, an intuitive
              parental control app designed to help parents monitor and manage
              their kids' device behavior, ensuring a safe and balanced digital
              experience.
            </Text>

            <Text style={{ color: "#4B5563", marginBottom: 12 }}>
              Our app empowers parents by providing real-time insights into
              their children's online activities, from screen time usage to app
              engagement. With WaisParent, you can easily set boundaries, block
              inappropriate content, and stay informed about your child's
              digital habits, all from the convenience of your own device.
            </Text>

            <Text style={{ color: "#4B5563", marginBottom: 12 }}>
              We believe that technology, when used wisely, can be a powerful
              tool for learning and growth. WaisParent is here to help you
              strike the right balance between safety and independence for your
              child in the digital world.
            </Text>

            <Text style={{ color: "#4B5563" }}>
              Join thousands of parents who trust WaisParent to safeguard their
              kids' digital experience.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
