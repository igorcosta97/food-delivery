import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrdersScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-purple-600">
          ⚙️ Pedidos
        </Text>
        <Text className="text-gray-500 mt-2">Pagina de Pedidos</Text>
      </View>
    </SafeAreaView>
  );
}
