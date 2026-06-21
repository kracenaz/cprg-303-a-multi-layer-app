import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      onPress={() =>
        router.push({ pathname: "/product/[id]", params: { id: product.id } })
      }
    >
      <Image source={product.image} style={styles.image} contentFit="cover" />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.category} numberOfLines={1}>
          {product.category}
        </Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
    backgroundColor: colors.background,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
  },
  info: {
    paddingTop: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    lineHeight: 18,
  },
  category: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginTop: 4,
  },
});
