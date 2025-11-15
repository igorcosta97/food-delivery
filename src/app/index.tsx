import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Banner } from "../components/banner";
import FoodCatalog from "../components/catalog";
import { Header } from "../components/header";
import Section from "../components/section";
import TrendingFoods from "../components/trending";
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-transparent">
      <View className="w-full px-4 mt-4">
        <Header/>
      </View>
      <ScrollView style={{ flex: 1 }} className="flex-1 bg-slate-200" showsVerticalScrollIndicator ={false}>
        <View className="w-full px-4 mt-4">
          <Banner/>
        </View>

        <Section name="Pedidos em Alta" size="text-2xl" label="Veja Mais" action={() => console.log("Button pressed")} />
        <TrendingFoods/>

        <Section name="Buscar" size="text-lg" label="" action={() => console.log("Button pressed")} />
        <FoodCatalog/>
      </ScrollView>
    </SafeAreaView>
  );
}
