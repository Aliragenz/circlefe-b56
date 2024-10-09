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

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch user data using React Query
    const { data, isLoading, error } = useQuery<UserEntity[], Error>({
        queryKey: ["users"], // Unique key for the query
        queryFn: async () => {
            const response = await apiV1.get<null, { data: UserEntity[] }>('/users');
            return response.data; // Assuming response.data is an array of UserEntity
        },
        refetchOnWindowFocus: true, // Optional: Refetch when the window is focused
    });

    // Filtered results based on search term
    const filteredData = data?.filter((item) =>
        item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

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
            <InputGroup mb={8}>
                <InputLeftElement pointerEvents="none" ml="8px" mt="0.5px">
                    <MdOutlinePersonSearch color="gray" />
                </InputLeftElement>
                <Input
                    type="text"
                    placeholder="Search your friend"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    bg="#1C1C1E"
                    border="none"
                    color="white"
                    borderRadius="full"
                    _placeholder={{ color: 'gray.500' }}
                />
            </InputGroup>

            {/* {isLoading && <Text color="white">Loading...</Text>} */}
            {error && <Text color="red.500">{error.message}</Text>}

            {searchTerm ? (
                filteredData.length > 0 ? (
                    <VStack spacing={4} align="stretch">
                        {filteredData.map((item) => (
                            <HStack key={item.id} justifyContent="space-between" alignItems="center">
                                <HStack spacing={4} maxWidth="70%">
                                    <Avatar src={item.image} />
                                    <Box maxWidth="400px">
                                        <Text color="white" fontWeight="bold" isTruncated>{item.fullName}</Text>
                                        <Text color="gray.500" isTruncated>{item.userName}</Text>
                                        <Text color="gray.500" fontSize="sm" isTruncated>{item.bio}</Text>
                                    </Box>
                                </HStack>
                                <Button 
                                    size="xs" 
                                    colorScheme="white" 
                                    variant="outline" 
                                    borderRadius="15px"
                                    width="75px"
                                    height="30px"
                                    minWidth="75px"
                                >
                                    Follow
                                </Button>
                            </HStack>
                        ))}
                    </VStack>
                ) : (
                    <Center height="70vh">
                        <VStack>
                            <Text color="white.500" fontSize="xl" fontWeight="bold">
                                No results for "{searchTerm}"
                            </Text>
                            <Text color="gray.500" fontSize="md">
                                Try searching for something else or check the
                            </Text>
                            <Text color="gray.500" fontSize="md" mt={-2}>
                                spelling of what you typed.
                            </Text>
                        </VStack>
                    </Center>
                )
            ) : null}
        </Box>
    );
};

export default SearchPage;
