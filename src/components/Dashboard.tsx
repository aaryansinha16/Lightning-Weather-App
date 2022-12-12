import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Box, Heading, Text, useToast, Button, HStack, Divider, Flex, Badge } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { AiOutlineHome, AiOutlineTeam } from 'react-icons/ai'
import { BiBarChartSquare, BiTimeFive } from 'react-icons/bi'
import { CgBriefcase } from 'react-icons/cg'
import { HiOutlineIdentification, HiOutlineLocationMarker } from 'react-icons/hi'
import { FiPieChart } from 'react-icons/fi'
import MainDash from './mainDash/MainDash'
import {BsCalendarDate, BsFillSunFill} from 'react-icons/bs'
import {MdOutlineSettings} from 'react-icons/md'
import { TiWeatherCloudy } from 'react-icons/ti'
import { CalendarIcon } from '@chakra-ui/icons'

const Dashboard = () => {
 
   return (
      <HStack gap={0} spacing={0} justifyContent='center' pr={4}>
     <Tabs
            //  variant="soft-rounded"
             colorScheme='orange'
             minH="100vh"
             defaultIndex={0}
             bg="white"
             isLazy
             overflow='hidden'
             w='80%'
          >
             <TabList
                flexDir="column"
                pr={{ base: 0, md: 1 }}
                pb={5}
                pl={1}
                pt='8'
                h="100%"
                w="100px"
                position="fixed"
                justifyContent="space-between"
                borderTopRightRadius={"xl"}
             >
                <VStack spacing={8}>
                   <Tab
                      fontSize={"lg"}
                      bg="transparent"
                      transition="0.2s ease-out"
                      color='black'
                      _hover={{
                          background:  "orange",
                          opacity: "0.9",
                          transition: "0.2s ease-out",
                          color:'white'
                      }}
                      _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                      w="60%"
                      borderRadius='12px'
                      justifyContent="center"
                      className='tab'
                   >
                      <AiOutlineHome fontSize="26px"  />
                   </Tab>
 
                   <Tab
                        fontSize={"lg"}
                        bg="transparent"
                        transition="0.2s ease-out"
                        color='black'
                        _hover={{
                        background:  "orange",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'white'
                        }}
                        _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                        w="60%"
                        borderRadius='12px'
                        justifyContent="center"
                   >
                      <BiBarChartSquare fontSize="26px" />
                   </Tab>
 
                   <Tab
                        fontSize={"lg"}
                        bg="transparent"
                        transition="0.2s ease-out"
                        color='black'
                        _hover={{
                        background:  "orange",
                        opacity: "0.9",
                        transition: "0.2s ease-out",
                        color:'white'
                        }}
                        _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                        w="60%"
                        borderRadius='12px'
                        justifyContent="center"
                   >
                      <HiOutlineLocationMarker fontSize="26px" />
                   </Tab>
 
                   <Tab
                      fontSize={"lg"}
                      bg="transparent"
                      transition="0.2s ease-out"
                      color='black'
                      _hover={{
                         background:  "orange",
                         opacity: "0.9",
                         transition: "0.2s ease-out",
                         color:'white'
                      }}
                      _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                      w="60%"
                      borderRadius='12px'
                      justifyContent="center"
                   >
                      <BsCalendarDate fontSize="26px" />
                   </Tab>
 
                   <Tab
                        fontSize={"lg"}
                        bg="transparent"
                        transition="0.2s ease-out"
                        color='black'
                        _hover={{
                            background:  "orange",
                            opacity: "0.9",
                            transition: "0.2s ease-out",
                            color:'white'
                        }}
                        _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                        w="60%"
                        borderRadius='12px'
                        justifyContent="center"
                   >
                      <MdOutlineSettings fontSize="26px"/> 
                   </Tab>
 
                   {/* <Tab
                      fontSize={"lg"}
                      bg="transparent"
                      transition="0.2s ease-out"
                      color='black'
                      _hover={{
                         background:  "orange",
                         opacity: "0.9",
                         transition: "0.2s ease-out",
                         color:'white'
                      }}
                      _selected={{bg: '#f97f29', color: 'white',  boxShadow: '2px 2px 25px orange'}}
                      w="60%"
                      borderRadius='12px'
                      justifyContent="center"
                   >
                      <FiPieChart fontSize="26px" />
                   </Tab> */}
                </VStack>
 
                <Box>
                 <Button
                //    onClick={handleLogout}
                    fontSize={"lg"}
                    bg="transparent"
                    transition="0.2s ease-out"
                    color='black'
                    _hover={{
                    background:  "orange",
                    opacity: "0.9",
                    transition: "0.2s ease-out",
                    color:'white'
                    }}
                    _selected={{bg: '#f97f29', color: 'white'}}
                    w="80%"
                    borderRadius='12px'
                    justifyContent="center">
                     <FiPieChart fontSize="26px" />
                 </Button>
                </Box>
 
             </TabList>
 
             <TabPanels p={2}  pl='110px' backgroundSize='cover' h='100vh'>
 
                <TabPanel >
                      <Box className='tbl' pl={6} pr={6} pb={2} pt={2} w='100%' h='94vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                         <MainDash />
                     </Box>
                </TabPanel>
 
                //* FOR ALL USERS
                <TabPanel >
                     <Box className='tbl' p={6} w='100%' h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                         <Text fontSize='4xl' color='white'>Users</Text>
                         {/* <AllTable data={users} title="User" roleHeading="role" totalP="Total Purchases(in Rs)" /> */}
                     </Box>
                </TabPanel>
 
                //* FOR ALL BRANDS
                <TabPanel>
                   <Box p={6} w='100%' h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                         <Text fontSize='4xl' color='white'>Brands</Text>
                         {/* <AllTable data={brands} title="Brands" /> */}
                   </Box>
                </TabPanel>
 
                //* FOR ALL PRODUCTS
                <TabPanel>
                   <Box w='100%' p={6} h='90vh' bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto' >
                         <Text fontSize='4xl' color='white'>Products</Text>
                         {/* <AllTable data={products} title="Products" roleHeading="Price"  totalP="Ratings" /> */}
                   </Box>
                </TabPanel>
 
                //* CREATING PRODUCTS
                <TabPanel>
                   <Box w='100%' p={6} h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>
                      <Text fontSize='4xl' color='white'>Create a new Product</Text>
                      {/* <AdminForm handleCreateProduct={handleCreateProduct} allBrands={allBrands} currPage="newProd"/> */}
                   </Box>
                </TabPanel>
 
                //* CREATING BRANDS
                {/* <TabPanel>
                <Box w='100%' p={6} h='90vh'  bgColor='rgba(255, 255, 255, .20)' borderRadius='2xl' style={{backdropFilter: 'blur(5px)'}} boxShadow='lg' m='auto'>
                      <Text fontSize='4xl' color='white'>Create a new Brand</Text>
                 </Box>
                </TabPanel> */}
                
             </TabPanels>
          </Tabs>

         <VStack 
            boxShadow='2xl'
            w='20%' 
            h='95vh' 
            borderRadius='25px' 
            bg='#f7f7f7' 
            pt={9}
            pl={6}
            pr={6}
            >
               <HStack w='100%' justifyContent='space-between'>
                  <VStack alignItems='flex-start' spacing={0} lineHeight='26px'>
                     <Text fontSize='20px' fontWeight='500'>Sun</Text>
                     <Text>Menu</Text>
                  </VStack>

                  <Text fontSize='46px' fontWeight='500' color='orange'>22°C</Text>
               </HStack>
               <Divider orientation='horizontal' w='100%' borderColor='gray.400' borderWidth='0.5px' bg='gray.400' opacity='0.3'/>

               <Flex alignItems='center' justifyContent='center' gap='15px' w='100%'  bg='#19283f' color='white' p={3} borderRadius='25px'>
                    <BsFillSunFill color='orange' fontSize='36px' style={{ borderRadius:'50%', padding:'5px'}}/>
                    <VStack spacing={0} alignItems='flex-start' lineHeight='25px'>
                        <Text as={Flex} gap="10px" fontSize='18px' fontWeight='500' alignItems='center'>20 UVI <Badge fontSize='10px'  colorScheme='yellow'>Moderate</Badge></Text>
                        <Text fontSize='12px'>Moderate risk from UV rays</Text>
                    </VStack>
               </Flex>

               <VStack w='100%' alignItems='flex-end' pt='15px'>
                        <Text w='100%' textAlign='center' fontSize='26px' fontWeight='500'>Weather Prediction</Text>
                        <VStack w='100%' pt='10px' pb='20px'>
                              <HStack alignItems='center' justifyContent='space-between' w='100%' bg='white' borderRadius='25px' p={3}>
                                 <Flex alignItems='center' justifyContent='center'  gap='15px' w='fit-content' color='black'  >
                                    <TiWeatherCloudy color='orange' fontSize='36px' style={{ borderRadius:'50%'}}/>
                                    <VStack spacing={0} alignItems='flex-start' lineHeight='20px' >
                                          <Text fontSize='12px' opacity='0.5' fontWeight='500' alignItems='center'>November 10</Text>
                                          <Text fontSize='16px' fontWeight='500'>Cloudy</Text>
                                    </VStack>
                                 </Flex>
                                 <Text color='orange' fontSize='22px'>26/29</Text>
                              </HStack>
                              <HStack alignItems='center' justifyContent='space-between' w='100%' bg='white' borderRadius='25px' p={3}>
                                 <Flex alignItems='center' justifyContent='center'  gap='15px' w='fit-content' color='black'  >
                                    <BsFillSunFill color='orange' fontSize='36px' style={{ borderRadius:'50%'}}/>
                                    <VStack spacing={0} alignItems='flex-start' lineHeight='20px' >
                                          <Text fontSize='12px' opacity='0.5' fontWeight='500' alignItems='center'>November 11</Text>
                                          <Text fontSize='16px' fontWeight='500'>Sunny</Text>
                                    </VStack>
                                 </Flex>
                                 <Text color='orange' fontSize='22px'>26/29</Text>
                              </HStack>
                        </VStack>
                        <Button bg='#f97f29' colorScheme='orange' fontSize='14px' p={4} color='white' borderRadius='15px' leftIcon={<CalendarIcon/>} fontWeight='400'>Next 5 Days</Button>

               </VStack>
         </VStack>

      </HStack>
   )
 }
 
 export default Dashboard