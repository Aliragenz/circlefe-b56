import React from 'react';
import { Box, VStack, Heading, Avatar, Text, Button, List, ListItem, HStack, Icon, Img, Center } from '@chakra-ui/react';
import ProfilePhoto from '@/img/girl3.jpg';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import DumbwaysLogo from "@/img/dumbwayslogo.png"
import Profile6 from "@/img/man3.jpg"
import Profile7 from "@/img/man4.jpg"
import Profile8 from "@/img/girl6.jpg"
import Profile9 from "@/img/girl4.jpg"
import Profile10 from "@/img/girl5.jpg"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const CustomSpace = ({ height = '16px' }) => (
    <Box height={height} />
);



export const RightSide: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate(); // Initialize navigate

    return (
        <Box w="33%" bg="#1A1A1A" p={4} color="white" height="100vh" overflowY="auto"
            sx={{
                /* Hide the scrollbar for Webkit browsers */
                '&::-webkit-scrollbar': {
                    width: '0px',
                    background: 'transparent',
                },
                /* Hide the scrollbar for Firefox */
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none',  // For Internet Explorer and Edge
            }}>
            <VStack spacing={4} align="stretch" height="100%">
                <Box bg="#262626" padding="15px" borderRadius="10px" >
                    <Text fontWeight="bold" mb={3}>My Profile</Text>
                    <Box
                        bgGradient="linear(to-r, #DDE7FF, #8CC5FF)"
                        bgImage={user.bannerImg}
                        backgroundPosition="center"
                        backgroundSize="cover"
                        borderRadius="lg"
                        width="361px"
                        height="80px"
                        position="relative"
                        padding="15px"
                        >
                        
                        <Avatar
                            name={user.fullName}
                            src={user.image} // Avatar or User Profile Image
                            size="xl"
                            position="absolute"
                            bottom="-50px"
                            left="15px"
                            border="4px solid #1A1A1A"
                        />
                        <Button
                            variant="outline"
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            color="white"
                            size="sm"
                            padding="15px"
                            borderRadius="15px"
                            fontSize="14px"
                            bottom="-40px"
                            right="0px"
                        >Edit Profile</Button>
                    </Box>

                    <Box textAlign="left" mt="55px">
                        <Heading size="md">{user.fullName}</Heading>
                        <Text textColor="#909090" >@{user.userName}</Text>
                        <Text fontSize="sm">{user.bio}</Text>

                        <HStack mt={3} align="stretch">
                            <List display="flex"> {/* Add spacing between ListItems */}
                                <ListItem display="flex" alignItems="center" marginRight="20px"> {/* Add space between items */}
                                    <Text fontWeight="bold" marginRight="4px">291</Text> {/* Space between number and text */}
                                    <Text textColor="#909090">Following</Text>
                                </ListItem>
                                <ListItem display="flex" alignItems="center">
                                    <Text fontWeight="bold" marginRight="4px">23</Text> {/* Space between number and text */}
                                    <Text textColor="#909090">Followers</Text>
                                </ListItem>
                            </List>
                        </HStack>
                    </Box>
                </Box>
                <List spacing={5} width="100%" bg="#262626" padding="15px" borderRadius="10px">
                    <Heading size="sm">Suggested for you</Heading>
                    <ListItem display="flex" alignItems="center" p={2} >
                        {/* Avatar */}
                        <Avatar
                            src={Profile6}
                            size="md"
                            mr={4} // Margin to the right of the Avatar to separate it from the text
                        />

                        {/* Text Container */}
                        <Box flex="1">
                            <Text fontWeight="bold">Mohammed Jawahir</Text>
                            <Text color="#909090">@em.jawahir</Text>
                        </Box>

                        {/* Button */}
                        <Button
                            size="xs"
                            colorScheme="white"
                            variant="outline"
                            borderRadius="15px"
                            color="#909090"
                        >
                            Following
                        </Button>
                    </ListItem>

                    <ListItem display="flex" alignItems="center" p={2} >
                        {/* Avatar */}
                        <Avatar
                            src={Profile9}
                            size="md"
                            mr={4} // Margin to the right of the Avatar to separate it from the text
                        />

                        {/* Text Container */}
                        <Box flex="1">
                            <Text fontWeight="bold">Shakia Kimathi</Text>
                            <Text color="#909090">@shakiakim</Text>
                        </Box>

                        {/* Button */}
                        <Button
                            size="xs"
                            colorScheme="white"
                            variant="outline"
                            borderRadius="15px"
                        >
                            Follow
                        </Button>
                    </ListItem>

                    <ListItem display="flex" alignItems="center" p={2} >
                        {/* Avatar */}
                        <Avatar
                            src={Profile7}
                            size="md"
                            mr={4} // Margin to the right of the Avatar to separate it from the text
                        />

                        {/* Text Container */}
                        <Box flex="1">
                            <Text fontWeight="bold" onClick={() => navigate('/profileother')}>Naveen Singh</Text>
                            <Text color="#909090">@naveeeen</Text>
                        </Box>

                        {/* Button */}
                        <Button
                            size="xs"
                            colorScheme="white"
                            variant="outline"
                            borderRadius="15px"
                        >
                            Follow
                        </Button>
                    </ListItem>

                    <ListItem display="flex" alignItems="center" p={2} >
                        {/* Avatar */}
                        <Avatar
                            src={Profile10}
                            size="md"
                            mr={4} // Margin to the right of the Avatar to separate it from the text
                        />

                        {/* Text Container */}
                        <Box flex="1">
                            <Text fontWeight="bold">Jennifer Stewart</Text>
                            <Text color="#909090">@jenniferste</Text>
                        </Box>

                        {/* Button */}
                        <Button
                            size="xs"
                            colorScheme="white"
                            variant="outline"
                            borderRadius="15px"
                        >
                            Follow
                        </Button>
                    </ListItem>

                    <ListItem display="flex" alignItems="center" p={2} >
                        {/* Avatar */}
                        <Avatar
                            src={Profile8}
                            size="md"
                            mr={4} // Margin to the right of the Avatar to separate it from the text
                        />

                        {/* Text Container */}
                        <Box flex="1">
                            <Text fontWeight="bold">Zula Chizimu</Text>
                            <Text color="#909090">@zulachi</Text>
                        </Box>

                        {/* Button */}
                        <Button
                            size="xs"
                            colorScheme="white"
                            variant="outline"
                            borderRadius="15px"
                        >
                            Follow
                        </Button>
                    </ListItem>
                </List>

                <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%" bg="#262626" padding="15px" borderRadius="10px">
                    {/* First Line: Developed By, Name, and Icons */}
                    <Box display="flex" alignItems="center" mb={1} fontSize="13px">
                        <Text color="white" mr={1}>Developed By</Text>
                        <Text color="white" mr={2}>Evan North</Text>
                        <Text color="white" mr={2}>•</Text>
                        <Icon as={IoLogoGithub} w={5} h={5} color="#909090" mr={2} />
                        <Icon as={FaLinkedin} w={5} h={5} color="#909090" mr={2} />
                        <Icon as={FaFacebook} w={5} h={5} color="#909090" mr={2} />
                        <Icon as={RiInstagramFill} w={5} h={5} color="#909090" />
                    </Box>

                    {/* Second Line: Powered By, Logo, and Other Text */}
                    <Box display="flex" alignItems="center" fontSize="12px">
                        <Text color="#909090" mr={2}>Powered By</Text>
                        <Img src={DumbwaysLogo} height="auto" width="20px" mr={2} />
                        <Text color="#909090" mr={2}>Dumbways Indonesia</Text>
                        <Text color="#909090" mr={2} fontWeight="bold">•</Text>
                        <Text color="#909090">#1 Coding Bootcamp</Text>
                    </Box>
                </Box>
                <Box>
                    <CustomSpace height="2px" /> {/* Custom space */}
                </Box>
            </VStack>
        </Box>
    );
};
