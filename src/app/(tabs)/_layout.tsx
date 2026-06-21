import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

function tabIcon(focused: boolean, name: IoniconName, focusedName: IoniconName) {
  return <Ionicons name={focused ? focusedName : name} size={24} color={focused ? "#111111" : "#707072"} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#111111",
        tabBarInactiveTintColor: "#707072",
        tabBarStyle: { backgroundColor: "#FFFFFF", borderTopColor: "#E5E5E5" },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "500" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => tabIcon(focused, "home-outline", "home"),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ focused }) => tabIcon(focused, "storefront-outline", "storefront"),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          title: "Bag",
          tabBarIcon: ({ focused }) => tabIcon(focused, "bag-outline", "bag"),
        }}
      />
    </Tabs>
  );
}
