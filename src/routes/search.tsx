import React from 'react';
import { Box, Flex, } from '@chakra-ui/react';

// Base
import SearchPage from '@/components/custom/search/mid-side';
import { RightSide } from '@/components/custom/search/right-side';
import { LeftSide } from '@/components/custom/search/left-side';

const OtherProfile: React.FC = () => {

    return (
        <Box bg="gray.700" color="white" height="100vh" overflow="hidden">
            <Flex>
                <LeftSide />
                <SearchPage />
                <RightSide />
            </Flex>
        </Box>
    );
};

export default OtherProfile;
