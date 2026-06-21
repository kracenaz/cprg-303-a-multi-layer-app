import { router, useLocalSearchParams } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://picsum.photos/600/400",
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>Nike Gato N7</Text>

        <Text style={styles.category}>Men's Shoes</Text>

        <Text style={styles.price}>$160</Text>

        <Text style={styles.sectionTitle}>Select Size</Text>

        <View style={styles.sizeContainer}>
          {["7", "8", "9", "10"].map((size) => (
            <TouchableOpacity key={size} style={styles.sizeButton}>
              <Text>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add to Bag</Text>
        </TouchableOpacity>

        <Text style={styles.idText}>Product ID: {id}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 20,
  },
  backText: {
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 300,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
  },
  category: {
    fontSize: 18,
    color: "#666",
    marginTop: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 15,
  },
  sectionTitle: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "600",
  },
  sizeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addButton: {
    marginTop: 30,
    backgroundColor: "#111",
    padding: 18,
    borderRadius: 30,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  idText: {
    marginTop: 20,
    color: "#888",
  },
});