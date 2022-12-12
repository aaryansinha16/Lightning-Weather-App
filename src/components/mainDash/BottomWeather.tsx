import { Avatar, Badge, Button, Flex, HStack, Progress, Stat, StatHelpText, StatLabel, StatNumber, Text, Tooltip, VStack } from '@chakra-ui/react'
// import { Tooltip } from 'chart.js'
import React , {useState, useEffect} from 'react'
import {TiWeatherCloudy} from 'react-icons/ti'
import {RiWindyLine} from 'react-icons/ri'
import {
    Marker,
    Popup
  } from 'react-leaflet'
  import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet'
  import { Line } from 'react-chartjs-2';
import { data, options } from '../../utils/chartUtils/frontChart'
// import { Popup } from 'react-leaflet/lib/Popup'

const BottomWeather = () => {

    const [position, setPosition] = useState<any>([22.3072 , 73.1812])
    // const map = useMapEvents({
    //     click() {
    //     map.locate()
    //     },
    //     locationfound(e) {
    //     setPosition(e.latlng)
    //     map.flyTo(e.latlng, map.getZoom())
    //     },
    // })

  return (
    <HStack w='100%'  justifyContent='space-between' gap='10px' alignItems='flex-start' pt='10px'>
        <VStack 
            w='60%' 
            borderRadius='25px' 
            boxShadow='2xl'
            align='flex-start'
            py={2}
            px={8}
            h='290px'
            > 
            <Line options={options} width={800} height={30} data={data} />
        </VStack>

        {/* <div id="map">

        </div> */}

        <VStack 
            w='40%' 
            borderRadius='25px' 
            boxShadow='2xl'
            align='flex-start'
            // py={6}
            // px={8}
            spacing={6}
            h='290px'
            id='map'
            > 
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}> 
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </VStack>
    </HStack>
  )
}

export default BottomWeather