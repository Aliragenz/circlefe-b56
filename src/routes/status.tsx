import React from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';

// Modal/Pop Up
import { ModalPost } from '@/components/modal/modal-post';

// Base
import { LeftSide } from '@/components/custom/status/left-side-status';
import { RightSide } from '@/components/custom/status/right-side-status';
import { MiddleSide } from '@/components/custom/status/mid-side-status';

const Base: React.FC = () => {

    // Modal state management for post creation
    const { isOpen: isPostModalOpen, onOpen: onOpenPostModal, onClose: onClosePostModal } = useDisclosure();

    // Modal state management for edit profile
    // const { isOpen: isEditProfileModalOpen, onOpen: onOpenEditProfileModal, onClose: onCloseEditProfileModal } = useDisclosure();

    return (
        <Box bg="gray.700" color="white" height="100vh" overflow="hidden">
            <Flex>
                <LeftSide />
                <MiddleSide onOpenModal={onOpenPostModal} />
                <RightSide />
            </Flex>

            {/* Modals */}
            <ModalPost isOpen={isPostModalOpen} onClose={onClosePostModal} />
        </Box>
    );
};

export default Base;
