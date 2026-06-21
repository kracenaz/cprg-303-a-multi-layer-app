import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PRODUCTS } from "../../data/products";

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.notFound}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.notFoundText}>Product not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header row */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={() => console.log("Share pressed")}
        >
          <Ionicons name="share-outline" size={22} color="#111111" />
        </TouchableOpacity>
      </View>

      <Image source={product.image} style={styles.image} contentFit="cover" />

      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price}</Text>

        <Text style={styles.sectionTitle}>Select Size</Text>

        <View style={styles.sizeContainer}>
          {product.sizes.map((size) => (
            <TouchableOpacity
              key={size.label}
              disabled={!size.available}
              style={[
                styles.sizeButton,
                !size.available && styles.sizeButtonUnavailable,
                selectedSize === size.label && styles.sizeButtonSelected,
              ]}
              onPress={() => setSelectedSize(size.label)}
            >
              <Text
                style={[
                  styles.sizeText,
                  !size.available && styles.sizeTextUnavailable,
                ]}
              >
                {size.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={() => router.back()}>
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
  notFound: {
    flex: 1,
    backgroundColor: "#fff",
  },
  notFoundText: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 18,
    color: "#666",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
  backButton: {
    padding: 20,
  },
  backText: {
    fontSize: 18,
  },
  shareButton: {
    padding: 8,
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
    flexWrap: "wrap",
    gap: 10,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  sizeButtonSelected: {
    borderColor: "#111111",
    borderWidth: 2,
  },
  sizeButtonUnavailable: {
    opacity: 0.4,
  },
  sizeText: {
    fontSize: 14,
    color: "#111111",
  },
  sizeTextUnavailable: {
    textDecorationLine: "line-through",
    color: "#707072",
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
