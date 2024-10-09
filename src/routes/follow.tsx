import React from 'react';
import { Box, Flex, } from '@chakra-ui/react';

// Base
import SearchPage from '@/components/custom/search/mid-side';
import { RightSideFollow } from '@/components/custom/follow/right-side-follow';
import { LeftSideFollow } from '@/components/custom/follow/left-side-follow';

const Follow: React.FC = () => {

    return (
        <Box bg="gray.700" color="white" height="100vh" overflow="hidden">
            <Flex>
                <LeftSideFollow />
                <SearchPage />
                <RightSideFollow />
            </Flex>
        </Box>
    );
};

export default Follow;
