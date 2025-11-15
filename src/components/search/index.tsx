import { Feather } from '@expo/vector-icons'
import { TextInput, View } from 'react-native'

type SearchProps = {
  value: string
  onChange: (text: string) => void
}

export function Search({ value, onChange }: SearchProps) {
  return (
    <View className="w-full flex-row h-14 rounded-lg items-center gap-2 px-4 bg-slate-300">
      <Feather name="search" size={16} color="#64748b" />
      <TextInput placeholder='Procure sua comida...' className='w-full flex-1 h-full bg-transparent' value={value} onChangeText={onChange} />
    </View>
  )
}