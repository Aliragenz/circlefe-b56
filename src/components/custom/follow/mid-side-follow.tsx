import { useState } from 'react';
import {
    Box,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    Center,
    VStack,
    Avatar,
    Button,
    HStack
} from '@chakra-ui/react';
import { MdOutlinePersonSearch } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import { apiV1 } from '@/libs/api'; // Ensure this imports your Axios instance
import { UserEntity } from '@/entities/user'; // Import UserEntity here

const FollowPage = () => {

    // Fetch user data using React Query
    // const { data, isLoading, error } = useQuery<UserEntity[], Error>({
    //     queryKey: ["users"], // Unique key for the query
    //     queryFn: async () => {
    //         const response = await apiV1.get<null, { data: UserEntity[] }>('/users');
    //         return response.data; // Assuming response.data is an array of UserEntity
    //     },
    //     refetchOnWindowFocus: true, // Optional: Refetch when the window is focused
    // });


    return (
        <Box
            bg="#1A1A1A"
            w="47%"
            height="100vh"
            p={4}
            borderLeft="solid"
            borderRight="solid"
            borderColor="#3F3F3F"
            borderWidth="1px"
        >
                    <Center height="70vh">
                        <VStack>
                            
                            <Text color="gray.500" fontSize="md">
                                Try searching for something else or check the
                            </Text>
                            <Text color="gray.500" fontSize="md" mt={-2}>
                                spelling of what you typed.
                            </Text>
                        </VStack>
                    </Center>
                )
            )
        </Box>
    );
};

export default FollowPage;
