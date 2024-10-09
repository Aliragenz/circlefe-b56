import React from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';

// Base
import { MiddleSideCombined } from '@/components/custom/own/mid-side-own';
import { RightSideOwn } from '@/components/custom/own/right-side-own';
import { LeftSideOwn } from '@/components/custom/own/left-side-own';

// Modal/Pop Up
import { ModalPostEditProfile } from '@/components/modal/modal-edit-profile';
import { ModalImagePost } from '@/components/modal/modal-image-post'; 

const OwnProfile: React.FC = () => {
    // Modal state management for edit profile
    const { isOpen: isEditProfileModalOpen, onOpen: onOpenEditProfileModal, onClose: onCloseEditProfileModal } = useDisclosure();

    // Modal state management for image post
    const { isOpen: isImagePostModalOpen, onOpen: onOpenImagePostModal, onClose: onCloseImagePostModal } = useDisclosure();

    return (
        <Box bg="gray.700" color="white" height="100vh" overflow="hidden">
            <Flex>
                <LeftSideOwn />
                <MiddleSideCombined 
                    onOpenEditProfileModal={onOpenEditProfileModal} 
                    onOpenImagePostModal={onOpenImagePostModal} 
                />
                <RightSideOwn />
            </Flex>

            {/* Modals */}
            <ModalPostEditProfile isOpen={isEditProfileModalOpen} onClose={onCloseEditProfileModal} />
            <ModalImagePost isOpen={isImagePostModalOpen} onClose={onCloseImagePostModal} /> {/* Add ImagePost modal */}
        </Box>
    );
};

export default OwnProfile;
