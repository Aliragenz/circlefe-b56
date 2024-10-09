import React from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';

// Modal/Pop Up
import { ModalPost } from '@/components/modal/modal-post';
import { ModalImagePost } from '@/components/modal/modal-image-post';

// Base
import { LeftSide } from '@/components/base/left-side-base';
import { RightSide } from '@/components/base/right-side-base';
import { MiddleSide } from '@/components/base/mid-side-base';

const Base: React.FC = () => {

    // Modal state management for post creation
    const { isOpen: isPostModalOpen, onOpen: onOpenPostModal, onClose: onClosePostModal } = useDisclosure();

    const { isOpen: isImagePostModalOpen, onOpen: onOpenImagePostModal, onClose: onCloseImagePostModal } = useDisclosure();

    return (
        <Box bg="gray.700" color="white" height="100vh" overflow="hidden">
            <Flex>
                <LeftSide onOpenModal={onOpenPostModal} />
                <MiddleSide onOpenModal={onOpenPostModal} onOpenImagePostModal={onOpenImagePostModal} />
                <RightSide />
            </Flex>

            {/* Modals */}
            <ModalPost isOpen={isPostModalOpen} onClose={onClosePostModal} />
            <ModalImagePost isOpen={isImagePostModalOpen} onClose={onCloseImagePostModal} />
        </Box>
    );
};

export default Base;
