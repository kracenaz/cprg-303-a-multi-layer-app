import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ flex: 1, position: "relative"}}>
        {/* Background Image */}
        <Image source={require("../../../assets/images/nike-home-img.jpg")}
        style={{ width: "100%", height: "100%"}} resizeMode="cover"/>

        <View style={{position: "absolute", bottom: 60, left: 20, right: 24}}>
          {/* Text */}
          <Text style={styles.boldText}>More Than the Win</Text>
          <Text> </Text>
          <Text style={styles.subText}>Driven by the legacy, grounded in the land.</Text>
          <Text style={styles.subText}>Introducing the Nike N7 Summer</Text>
          <Text> </Text>
          {/* Discover Button */}
          <Pressable onPress={() => console.log("Discover Button Pressed")}>
            <Text style={styles.discoverButton}>Discover</Text>
          </Pressable>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boldText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  subText: {
    color: "#fff",
    fontSize: 14,
  },
  discoverButton: {
    backgroundColor: "rgba(63, 63, 63, 0.6)",
    borderColor: "rgba(190, 188, 188, 0.62)",
    color: "#fff",
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    alignSelf: "flex-start",
  }
});

