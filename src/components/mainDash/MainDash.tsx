import { VStack } from '@chakra-ui/react'
import React from 'react'
import BottomWeather from './BottomWeather'
import TopSec from './TopSec'
import WeatherCard from './WeatherCard'

const MainDash = () => {
  return (
    <VStack>
        <TopSec />
        <WeatherCard />
        <BottomWeather/>
    </VStack>
  )
}

export default MainDash