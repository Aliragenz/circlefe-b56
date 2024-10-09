import React from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';

// Base
import { LeftSide } from '@/components/custom/profile/left-side-profile';
import { MiddleSide } from '@/components/custom/profile/mid-side-profile';
import { RightSide } from '@/components/custom/profile/right-side-profile';

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
                <LeftSide />
                <MiddleSide 
                    onOpenEditProfileModal={onOpenEditProfileModal} 
                    onOpenImagePostModal={onOpenImagePostModal} 
                />
                <RightSide />
            </Flex>

            {/* Modals */}
            <ModalPostEditProfile isOpen={isEditProfileModalOpen} onClose={onCloseEditProfileModal} />
            <ModalImagePost isOpen={isImagePostModalOpen} onClose={onCloseImagePostModal} /> {/* Add ImagePost modal */}
        </Box>
    );
};

export default OwnProfile;
