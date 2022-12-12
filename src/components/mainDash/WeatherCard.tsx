import { Avatar, Badge, Button, Flex, HStack, Progress, Stat, StatHelpText, StatLabel, StatNumber, Text, Tooltip, VStack } from '@chakra-ui/react'
// import { Tooltip } from 'chart.js'
import React, {useState, useEffect} from 'react'
import {TiWeatherCloudy} from 'react-icons/ti'
import {RiWindyLine} from 'react-icons/ri'

const WeatherCard = () => {
    const [progress , setProgress] = useState<number>(80)

  return (
    <HStack w='100%'  justifyContent='space-between' gap='10px' alignItems='center' pt='10px'>
        <VStack 
            w='50%' 
            borderRadius='25px' 
            boxShadow='lg'
            align='flex-start'
            py={6}
            px={8}
            spacing={4}
            bg='white'
            // h='400px'
            > 
                <Flex alignItems='center' justifyContent='center' gap='15px'>
                    <TiWeatherCloudy color='orange' fontSize='36px' style={{boxShadow:'.5px .5px 20px yellow', borderRadius:'50%', padding:'5px'}}/>
                    <VStack spacing={0} alignItems='flex-start' lineHeight='25px'>
                        <Text fontSize='18px' fontWeight='500'>Weather</Text>
                        <Text fontSize='16px'>What's the weather</Text>
                    </VStack>
                </Flex>

                <VStack spacing={0} align='flex-start'>
                    <Text fontSize='36px' fontWeight='500'>25°C <Badge fontSize='14px' fontWeight='400'>11°C</Badge></Text>
                    <Text fontSize='16px'>Partly Cloudy</Text>
                </VStack>

                <HStack w='100%' gap='10px' justifyContent='space-between' color='white' flexWrap='wrap'>
                    <Stat 
                        p={4}
                        w='33%'
                        borderRadius='12px'
                        bg='orange'
                        >
                        <StatLabel>Pressure</StatLabel>
                        <StatNumber>600<span style={{fontSize:'12px'}}>mb</span></StatNumber>
                    </Stat>
                    <Stat 
                        p={4}
                        w='33%'
                        borderRadius='12px'
                        bg='orange'
                        >
                        <StatLabel>Visibility</StatLabel>
                        <StatNumber>4.3<span style={{fontSize:'12px'}}>Kms</span></StatNumber>
                    </Stat>
                    <Stat 
                        p={4}
                        w='33%'
                        borderRadius='12px'
                        bg='orange'
                        >
                        <StatLabel>Humidity</StatLabel>
                        <StatNumber>87<span style={{fontSize:'12px'}}>%</span></StatNumber>
                    </Stat>
                </HStack>

        </VStack>


        <VStack 
            w='50%' 
            borderRadius='25px' 
            boxShadow='lg'
            align='flex-start'
            py={6}
            px={8}
            spacing={4}
            // h='400px'
            > 
                <Flex alignItems='center' justifyContent='center' gap='15px'>
                    <RiWindyLine  color='orange' fontSize='36px' style={{boxShadow:'.5px .5px 20px yellow', borderRadius:'50%', padding:'5px'}}/>
                    <VStack spacing={0} alignItems='flex-start' lineHeight='25px'>
                        <Text fontSize='18px' fontWeight='500'>Air Quality</Text>
                        <Text fontSize='16px'>Main Pollution: PM 2.5</Text>
                    </VStack>
                </Flex>

                <VStack spacing={0} align='flex-start'>
                    <Text fontSize='36px' align='center' fontWeight='500'>390 <Badge colorScheme='yellow' fontSize='14px' fontWeight='400'>AQI</Badge></Text>
                    <Text fontSize='16px'>West Wind</Text>
                </VStack>

                <VStack w='100%' gap='10px' alignItems='space-between' p={4} borderRadius={'15px'} boxShadow='xl'>
                    <HStack w='100%' justifyContent='space-between'>
                        {progress < 150 ? <Text pl={3} pr={3} borderRadius="12px" bg='#61cacb' color='white'>Good</Text> : <Text>Good</Text>}
                        {progress >= 150 && progress < 300 ? <Text pl={3} pr={3} borderRadius="12px" bg='#19283f' color='white'>Standard</Text> : <Text>Standard</Text>}
                        {progress > 300 ? <Text pl={3} pr={3} borderRadius="12px" bg='tomato' color='white'>Hazardous</Text> : <Text>Hazardous</Text>}
                    </HStack>
                    <Tooltip label={`${progress}AQI`} hasArrow>
                        <Progress value={progress} min={0} max={500} colorScheme={progress < 150? 'green' :  progress>150  ? 'yellow' : progress > 300 ? 'tomato' : 'teal' } borderRadius='12px' hasStripe isAnimated={true}/>
                    </Tooltip>
                </VStack>
            </VStack>

    </HStack>
  )
}

export default WeatherCard