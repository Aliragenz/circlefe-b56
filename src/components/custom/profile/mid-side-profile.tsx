import React, { useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Divider,
  Heading,
  Avatar,
  Icon,
  Button,
  Img,
  HStack,
  List,
  ListItem,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure
} from '@chakra-ui/react';
import { FaRegHeart, FaArrowLeft } from "react-icons/fa6";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import ProfilePhoto from '@/img/man4.jpg';
import OwnPost1 from '@/img/img1.jpg';
import OwnPost2 from '@/img/img2.jpg';
import OwnPost3 from '@/img/img3.jpg';
import OwnPost4 from '@/img/img4.jpg';
import OwnPost5 from '@/img/img5.jpg';
import OwnPost6 from '@/img/img6.jpg';
import OwnPost7 from '@/img/img7.jpg';
import OwnPost8 from '@/img/img8.jpg';

// Custom spacing component
const CustomSpace = ({ height = '16px' }) => <Box height={height} />;

const userInputText = `Yg miss menurut gw minum sih. Mango lassi ok aja, mangga melimpah tp sisanya yauda, gw punya standar lbh tinggi di goodlife 🙏🏼

Zonknya: butter milk. Udah diperingatkan mbanya sampe "beneran mau kak??? Takut ga cocok" tp laki gw nekat pesen. Rasanya kek kuah sop dikulkasin 👍🏼👍🏼`;

interface MiddleSideProps {
    onOpenEditProfileModal: () => void;
    onOpenImagePostModal: () => void;
  }

export const MiddleSide: React.FC<MiddleSideProps> = ({ onOpenEditProfileModal, onOpenImagePostModal }) => {

  

  const navigate = useNavigate(); // Initialize navigate
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle background position when modal is open
  const handleModalOpen = () => {
    setIsModalOpen(true);
    onOpen();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <Box w="47%" bg="#1A1A1A" p={4} color="white" borderLeft="solid" height="100vh" borderRight="solid" borderColor="#3F3F3F" borderWidth="1px" overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          width: '0px',
          background: 'transparent',
        },
        scrollbarWidth: 'none',
        '-ms-overflow-style': 'none',
      }}>
      <Heading size="md" mb={4} display="flex" alignItems="center">
        <Icon as={FaArrowLeft} mr={3} onClick={() => navigate('/')}></Icon>
        <Text>Naveen Singh</Text>
      </Heading>

      <VStack spacing={4} align="stretch">
        <Box>
          <Box
            bgGradient="linear(to-r, #00ff87, #60efff)"
            borderRadius="lg"
            height="125px"
            position="relative"
            padding="15px"
          >
            <Avatar
              name="Stella Audhina"
              src={ProfilePhoto}
              size="xl"
              position="absolute"
              bottom="-50px"
              left="15px"
              border="4px solid #1A1A1A"
            />
            <Button
  variant="outline"
  position={isModalOpen ? "fixed" : "absolute"} // Fix background during modal open
  display="flex"
  alignItems="center"
  size="sm"
  padding="15px"
  borderRadius="15px"
  fontSize="14px"
  bottom="-40px"
  right="0px"
  colorScheme="white" 
>
  Follow
</Button>

          </Box>

          <Box textAlign="left" mt="55px">
            <Heading size="md">Naveen Singh</Heading>
            <Text textColor="#909090">@naveeeen</Text>
            <Text fontSize="md" whiteSpace="pre-wrap">Political Consultant | Veer Bhogya Vasundhara | Patriot | E-Majdoor | Political Observer</Text>

            <HStack mt={3} align="stretch">
              <List display="flex">
                <ListItem display="flex" alignItems="center" marginRight="20px">
                  <Text fontWeight="bold" marginRight="4px">291</Text>
                  <Text textColor="#909090">Following</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <Text fontWeight="bold" marginRight="4px">23</Text>
                  <Text textColor="#909090">Followers</Text>
                </ListItem>
              </List>
            </HStack>
          </Box>
        </Box>

        {/* Tab Buttons */}
        <Tabs variant="unstyled" width="105.5%" ml="-16px">
          <TabList borderBottom="1px solid #3F3F3F" display="flex" justifyContent="space-between" alignItems="center">
            <Tab
              flex="1"
              textAlign="center"
              p={2}
              fontWeight="bold"
              color="white"
              ml={5}
              _selected={{ borderBottom: "4px solid", borderColor: "#04A51E", color: "white" }}
              _hover={{ color: "gray.400" }}
            >
              All Post
            </Tab>
            <Tab
              flex="1"
              textAlign="center"
              p={2}
              fontWeight="bold"
              color="gray.400"
              mr={5}
              _selected={{ borderBottom: "4px solid", borderColor: "#04A51E", color: "white" }}
              _hover={{ color: "gray.400" }}
            >
              Media
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              {/* All Post Section */}
              <Box display="flex" alignItems="flex-start" p={4}>
                <Avatar src={ProfilePhoto} mr={4} />
                <Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Text fontWeight="bold" mr={2}>✨ Stella Audhina ✨</Text>
                    <Text mr={2} textColor="#909090">@audhinafi</Text>
                    <Text textColor="#909090">• 4h</Text>
                  </Box>
                  <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                    Well beauty is in the eye of the beholder
                  </Text>
                  <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center" marginRight="25px">
                      <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" />
                      <Text textColor="#909090">24</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                      <Text textColor="#909090">381 Replies</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />

              <Box display="flex" alignItems="flex-start" p={4}>
                <Avatar src={ProfilePhoto} mr={4} />
                <Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Text fontWeight="bold" mr={2}>✨ Stella Audhina ✨</Text>
                    <Text mr={2} textColor="#909090">@audhinafi</Text>
                    <Text textColor="#909090">• 12h</Text>
                  </Box>
                  <Text fontSize="14px" textAlign="justify" marginBottom="10px" whiteSpace="pre-wrap">
                    {userInputText}
                  </Text>
                  <Img src={OwnPost1} borderRadius="15px" height="auto" width="250px" marginBottom="10px" />
                  <Box display="flex" alignItems="center">
                    <Box display="flex" alignItems="center" marginRight="25px">
                      <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" />
                      <Text textColor="#909090">56</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                      <Text textColor="#909090">381 Replies</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />
            </TabPanel>

            <TabPanel p={2}>
              {/* Media Grid Section */}
              <Box mt={2}>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                  <Box width="100%" height="0" paddingBottom="100%" position="relative">
                    <Img
                      src={OwnPost1}
                      borderRadius="15px"
                      width="100%"
                      height="100%"
                      position={isModalOpen ? "fixed" : "absolute"} // Fix background during modal open
                      top="0"
                      left="0"
                      objectFit="cover"
                      onClick={onOpenImagePostModal}
                      
                    />
                  </Box>
                  <Box width="100%" height="0" paddingBottom="100%" position="relative">
                    <Img
                      src={OwnPost2}
                      borderRadius="15px"
                      width="100%"
                      height="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      objectFit="cover"
                    />
                  </Box>
                  <Box width="100%" height="0" paddingBottom="100%" position="relative">
                    <Img
                      src={OwnPost3}
                      borderRadius="15px"
                      width="100%"
                      height="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      objectFit="cover"
                    />
                  </Box>
                  <Box width="100%" height="0" paddingBottom="100%" position="relative">
                    <Img
                      src={OwnPost4}
                      borderRadius="15px"
                      width="100%"
                      height="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      objectFit="cover"
                    />
                  </Box>
                  <Box width="100%" height="0" paddingBottom="100%" position="relative">
                    <Img
                      src={OwnPost5}
                      borderRadius="15px"
                      width="100%"
                      height="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      objectFit="cover"
                    />
                  </Box>
                  <Box width="100%" height="0" paddingBottom="100%" position="relative">
                    <Img
                      src={OwnPost6}
                      borderRadius="15px"
                      width="100%"
                      height="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      objectFit="cover"
                    />
                  </Box>
                  <Box width="100%" height="0" paddingBottom="100%" position="relative">
                    <Img
                      src={OwnPost7}
                      borderRadius="15px"
                      width="100%"
                      height="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      objectFit="cover"
                    />
                  </Box>
                  <Box width="100%" height="0" paddingBottom="100%" position="relative">
                    <Img
                      src={OwnPost8}
                      borderRadius="15px"
                      width="100%"
                      height="100%"
                      position="absolute"
                      top="0"
                      left="0"
                      objectFit="cover"
                    />
                  </Box>
                </Grid>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <CustomSpace />
      </VStack>
    </Box>
  );
};
