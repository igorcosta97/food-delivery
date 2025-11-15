import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';
import { FoodProps } from '..';



export default function CardVerticalFood({ food }: { food: FoodProps }) {
  return (
    <View>
      <Pressable className='flex flex-row rounded-xl justify-start gap-4 mb-4'>
        <View>
            <Image source={{ uri: food.image || undefined }} className="w-28 h-24 rounded-xl" />
        </View>
        <View>
            <Text className='text-black mt-1'>{food.name}</Text>
            <View className='flex flex-row gap-2 mt-1 items-center'>
                <Ionicons name="star" size={14} color="#ca8a04" />
                <Text className='text-neutral-600 text-sm'>{food.rating }</Text>
                <Ionicons name="ellipse" size={4} color="#000" />
                <MaterialCommunityIcons name="motorbike" size={14} color="black" />
                <Text className='text-neutral-600 text-sm'>{food.time}</Text>
                <Ionicons name="ellipse" size={4} color="#000" />
                <Text className='text-green-700 text-sm'>{food.price}</Text>
            </View>
        </View>
        
      </Pressable>
    </View>
  )
}