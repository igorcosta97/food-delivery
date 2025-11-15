import { useEffect, useRef, useState } from 'react'
import { Image, Pressable, View } from 'react-native'
import PagerView from 'react-native-pager-view'

export function Banner() {
  const pagerRef = useRef<PagerView>(null)

  const [page, setPage] = useState(0)

  const totalPages = 2 // temos 2 banners

   useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (page + 1) % totalPages
      pagerRef.current?.setPageWithoutAnimation(nextPage)
      setPage(nextPage)
      //console.log("Página atual do banner:", nextPage)
    }, 9000) // troca a cada 9 segundos

    return () => clearInterval(interval)
  }, [page])

  return (
    <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4'>
      <PagerView ref={pagerRef} style={{flex:1}} initialPage={0} pageMargin={14} onPageSelected={e => setPage(e.nativeEvent.position)} className='rounded-2xl overflow-hidden'>
        <Pressable className='w-full h-36 md:h-60 rounded-2xl' key={1} onPress={() => console.log("Clicou no banner 1")}>
            <Image source={require("../../assets/banner1.png")} className='w-full h-36 md:h-60 rounded-2xl' />
        </Pressable>
        <Pressable className='w-full h-36 md:h-60 rounded-2xl' key={2} onPress={() => console.log("Clicou no banner 2")}>
            <Image source={require("../../assets/banner2.png")} className='w-full h-36 md:h-60 rounded-2xl' />
        </Pressable>
      </PagerView>
    </View>
  )
}