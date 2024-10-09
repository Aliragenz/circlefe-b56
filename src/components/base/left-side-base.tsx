import React from 'react';
import { Box, VStack, Heading, List, ListItem, Spacer, Text, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { clearUser } from '@/store/auth-slice';
import Logo from "@/img/logocircle.png";
import { BiSolidHomeCircle } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { Button } from '../button';

interface LeftSideProps {
    onOpenModal: () => void;
}

export const LeftSide: React.FC<LeftSideProps> = ({ onOpenModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Handle logout
    const handleLogout = () => {
        // Remove token from cookies
        Cookies.remove('token');

        // Clear user data from localStorage
        localStorage.removeItem('user');

        // Dispatch the clearUser action to reset Redux state
        dispatch(clearUser());

        // Navigate to the login page
        navigate('/login');

        
    };

    return (
        <Box w="20%" bg="#1A1A1A" p={4} color="white" height="100vh">
            <VStack align="start" spacing={4} height="100%">
                <Heading size="lg" marginBottom="15px" marginLeft="20px" marginTop="15px">
                    <img src={Logo} width="120px" alt="Circle Logo" />
                </Heading>
                <List spacing={4} marginLeft="20px">
                    <ListItem
                        display="flex"
                        alignItems="center"
                        fontWeight="bold"
                        onClick={() => navigate('/')}
                        cursor="pointer"
                    >
                        <Icon as={BiSolidHomeCircle} w={5} h={5} marginRight="10px" />
                        <p>Home</p>
                    </ListItem>
                    <ListItem
                        display="flex"
                        alignItems="center"
                        onClick={() => navigate('/search')}
                        cursor="pointer"
                    >
                        <Icon as={MdPersonSearch} w={5} h={5} marginRight="10px" />
                        <p>Search</p>
                    </ListItem>
                    <ListItem
                        display="flex"
                        alignItems="center"
                        onClick={() => navigate('/follows')}
                        cursor="pointer"
                    >
                        <Icon as={FaRegHeart} w={5} h={5} marginRight="10px" />
                        <p>Follows</p>
                    </ListItem>
                    <ListItem
                        display="flex"
                        alignItems="center"
                        onClick={() => navigate('/profile')}
                        cursor="pointer"
                    >
                        <Icon as={BsPersonCircle} w={5} h={5} marginRight="10px" />
                        <p>Profile</p>
                    </ListItem>
                </List>
                <Button
                onClick={onOpenModal}
                >Create Post</Button>
                <Spacer />
                <List>
                    <ListItem
                        display="flex"
                        alignItems="center"
                        marginLeft="20px"
                        onClick={handleLogout} // Call handleLogout here
                        cursor="pointer"
                    >
                        <Icon as={IoExitOutline} marginRight="10px" />
                        <Text>Logout</Text>
                    </ListItem>
                </List>
            </VStack>
        </Box>
    );
};
