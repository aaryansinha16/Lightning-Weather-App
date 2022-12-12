import { Avatar, Flex, HStack, Input, Text, VStack } from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Divider,IconButton, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react'
import React, { useState , useRef} from 'react'
import { FiCrosshair } from 'react-icons/fi'

const TopSec = () => {
  return (
    <HStack w='100%' justify='space-between'>
        <Flex alignItems='center' justifyContent='center' gap='20px'>
            <Avatar src={'https://bit.ly/dan-abramov'}/>
            <VStack spacing='0px' alignItems='flex-start' lineHeight='36px'>
                <Text fontSize='32px'>Hello,</Text>
                <Text fontSize='36px' fontWeight='500'>Aaryan</Text>
            </VStack>
        </Flex>

        <HStack 
            display={{base:'none', sm:'flex'}}  
            w={{base:'80%', md:'35%'}} 
            borderRadius='md' 
            py={{base:3, md:3}} 
            px={5}  
            boxShadow='lg'
            // bgColor='rgba(255, 255, 255, .65)' 
            bgColor='gray.100'
            style={{backdropFilter: 'blur(5px)'}}
            transition= '0.2s linear'
            _hover={{bgColor:'rgba(255, 255, 255, .95)', transition: '0.2s linear'}}
            >

                <Input
                    px={4}
                    fontSize='16px'
                    placeholder='Search for a Location...'
                    variant='unstyled'
                />

                <Box w='30px' >
                    <SearchIcon cursor='pointer'  color='orange' fontSize='20px'/>
                </Box>
        </HStack>
    </HStack>
  )
}

export default TopSec