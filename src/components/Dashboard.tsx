import { Tab, TabList, TabPanel, TabPanels, Tabs, VStack, Box, Heading, Text, useToast, Button, HStack, Divider, Flex, Badge } from '@chakra-ui/react'
import React, {useState, useEffect, memo} from 'react'
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
import TabRight from './TabRight'
import {currentData, initialGet, pollutionData} from '../api/requests'

const Dashboard = () => {
   console.log("Dashboard render test")

   const [currData, setCurrData] = useState<[]>([])
   const [futureData ,setFutureData] = useState<[]>([])
   const [pollData, setPollData] = useState<[]>([])

   useEffect(() => {
      // initialGet()
      // .then((res) => {
      //    // console.log(res,'THIS IS RESPONSE')
      //    setFutureData(res)
      // })
      // .catch((e) => console.log('Error:', e))

      // currentData()
      // .then((res) =>{
      //     console.log("Currentdata", res)
      //     setCurrData(res)
      //    })
      // .catch((e) => console.log('error', e))


      // pollutionData()
      // .then((res) => {
      //    console.log(res,'POLLUTION DATA');
         
      //    setPollData(res)
      // })
      // .catch((e) => console.log("Error", e))
   }, [])

   return (
      <HStack gap={0} spacing={0} justifyContent='center' pr={4} display={{base:'none', md:'flex'}}>
     <Tabs
            //  variant="soft-rounded"
             colorScheme='orange'
             minH="100vh"
             defaultIndex={0}
             bg="white"
             isLazy
             overflow='hidden'
             w={{base:'100%', lg:'80%'}}
             align='end'
          >
             <TabList
                flexDir={{base:'row', md:"column"}}
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
                <VStack spacing={8} flexDir={{base:'row', md: 'column'}}>
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
 
                </VStack>
 
             </TabList>
 
             <TabPanels p={2}  pl='110px' backgroundSize='cover' h='100vh'>
 
                <TabPanel >
                      <Box 
                        pl={6} 
                        pr={6} 
                        pb={2} 
                        pt={2} 
                        w='100%' 
                        h='94vh'  
                        bgColor='rgba(255, 255, 255, .20)' 
                        borderRadius='2xl' 
                        style={{backdropFilter: 'blur(5px)'}} 
                        boxShadow='lg' 
                        m='auto'
                        overflowY='scroll' >
                         <MainDash currData={currData} futureData={futureData} pollData={pollData}/>
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
         <Box w='20%' display={{base:'none', lg:'block'}}>
            <TabRight/>
         </Box>

      </HStack>
   )
 }
 
 export default memo(Dashboard)