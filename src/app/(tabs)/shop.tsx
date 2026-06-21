import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../data/products";
import { colors } from "../../theme/colors";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const HERO_ITEMS = [
  {
    id: "1",
    title: "Rip the Script",
    image: { uri: "https://picsum.photos/seed/hero1/800/500" },
  },
  {
    id: "2",
    title: "More Than the Win",
    image: require("../../../assets/images/nike-home-img.jpg"),
  },
  {
    id: "3",
    title: "Built for Speed",
    image: { uri: "https://picsum.photos/seed/hero3/800/500" },
  },
  {
    id: "4",
    title: "Summer Collection",
    image: { uri: "https://picsum.photos/seed/hero4/800/500" },
  },
];

const CATEGORIES = [
  { id: "shoes", label: "Shoes", image: { uri: "https://picsum.photos/seed/catshoes/400/400" } },
  { id: "clothing", label: "Clothing", image: { uri: "https://picsum.photos/seed/catclothing/400/400" } },
  { id: "gear", label: "Gear", image: { uri: "https://picsum.photos/seed/catgear/400/400" } },
  { id: "sport", label: "Sport", image: { uri: "https://picsum.photos/seed/catsport/400/400" } },
];

const GENDERS = ["Men", "Women", "Kids"];

export default function ShopScreen() {
  const [activeGender, setActiveGender] = useState("Men");
  const [heroDot, setHeroDot] = useState(0);
  const heroRef = useRef<FlatList>(null);

  const cellSize = (SCREEN_WIDTH - 48) / 2;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Gender pill */}
        <View style={styles.genderRow}>
          <Pressable
            style={styles.genderPill}
            onPress={() => {
              const next = GENDERS[(GENDERS.indexOf(activeGender) + 1) % GENDERS.length];
              setActiveGender(next);
            }}
          >
            <Text style={styles.genderText}>{activeGender}</Text>
            <Ionicons name="chevron-down" size={14} color={colors.text} style={styles.chevron} />
          </Pressable>
        </View>

        {/* Hero carousel */}
        <FlatList
          ref={heroRef}
          data={HERO_ITEMS}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const index = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
            setHeroDot(index);
          }}
          renderItem={({ item }) => (
            <View style={[styles.heroSlide, { width: SCREEN_WIDTH }]}>
              <Image source={item.image} style={styles.heroImage} contentFit="cover" />
              <Text style={styles.heroTitle}>{item.title}</Text>
            </View>
          )}
        />

        {/* Pagination dots */}
        <View style={styles.dotsRow}>
          {HERO_ITEMS.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === heroDot && styles.dotActive]}
            />
          ))}
        </View>

        {/* 2x2 category grid */}
        <View style={styles.grid}>
          {CATEGORIES.map((cat) => (
            <Pressable
              key={cat.id}
              style={[styles.categoryCell, { width: cellSize, height: cellSize }]}
            >
              <Image source={cat.image} style={StyleSheet.absoluteFill} contentFit="cover" />
              <View style={styles.categoryOverlay} />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </Pressable>
          ))}
        </View>

        {/* New For You header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New For You</Text>
          <Pressable>
            <Ionicons name="options-outline" size={22} color={colors.text} />
          </Pressable>
        </View>

        {/* Product cards row */}
        <FlatList
          data={PRODUCTS}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productList}
          renderItem={({ item }) => <ProductCard product={item} />}
          scrollEnabled
        />

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },

  /* Gender pill */
  genderRow: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  genderPill: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: colors.background,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },
  genderText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  chevron: {
    marginLeft: 4,
  },

  /* Hero carousel */
  heroSlide: {
    height: 260,
    justifyContent: "flex-end",
  },
  heroImage: {
    ...StyleSheet.absoluteFill,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    padding: 16,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },

  /* Pagination dots */
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 16,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.text,
    width: 18,
    borderRadius: 3,
  },

  /* Category grid */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  categoryCell: {
    borderRadius: 16,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  categoryLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    padding: 10,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  /* New For You */
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
  productList: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  bottomSpacer: {
    height: 24,
  },
});
