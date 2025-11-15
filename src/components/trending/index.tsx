import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import CardHorizontalFood from './food';

export interface FoodProps{
    id: string;
    name: string;
    description: string;
    image: string | null;
    price: string;
    rating: number;
    time: string;
    delivery: string;
}

export default function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        async function fetchFoods() {
            try {
                const response = await fetch('https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=countries&tag_contains_0=contains&tag_0=Brazil&tagtype_1=categories&tag_contains_1=contains&tag_1=pizza&fields=code,product_name,product_name_pt,generic_name,generic_name_pt,brands,quantity,image_url&page_size=5&json=1')
                const listProducts = await response.json()
                const listProductsSample = listProducts.products.map((p: any) => {
                   const price = (Math.random() * (50 - 5) + 5).toFixed(2)
                  // Rating entre 4.0 e 5.0 com 1 casa decimal
                  const rating = (Math.random() * (5 - 4) + 4).toFixed(1)

                  // Tempo: escolhe entre 10, 20, 30, 40, 50
                  const possibleTimes = [10, 20, 30, 40, 50]
                  const time = possibleTimes[Math.floor(Math.random() * possibleTimes.length)]
                    return {
                        id: p.code,
                        name: p.product_name_pt || p.product_name || "Sem nome",        // pega o nome em português se existir
                        description: p.generic_name_pt || p.generic_name || p.brands || "",          // descrição genérica
                        image: p.image_front_url || p.image_url || null,               // imagem frontal (ou fallback)
                        price: `R$ ${price}`,
                        rating: Number(rating),
                        time: `${time}-${time + 10} min`
                    };
                });
                setFoods(listProductsSample)
                //console.log(listProductsSample)
            } catch (error) {
                console.error('Error fetching trending foods:', error)
            }
        }
        fetchFoods();
    }, [])
  
  return (
    <View>
      <FlatList 
      data={foods}
      renderItem={({item}) => (
        <CardHorizontalFood food={item} />
      )}
      horizontal={true}
      contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight:16}}
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}