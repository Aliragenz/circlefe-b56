import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  IconButton,
  Box,
  Text,
  Avatar,
  Textarea,
  Divider,
  Icon
} from '@chakra-ui/react';
import { IoCloseCircleOutline } from "react-icons/io5";
import ProfilePhoto from '@/img/girl3.jpg';
import { LuImagePlus } from 'react-icons/lu';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { updateUserDTO } from '@/types/user';
import { UserEntity } from '@/entities/user';
import { apiV1 } from '@/libs/api';
import { updateUserFormInputs, updateUserSchema } from '../schema/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface ModalPostEditProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalPostEditProfile({ isOpen, onClose }: ModalPostEditProfileProps) {
  
  const { register, handleSubmit, reset, watch, formState: { isSubmitting } } = useForm<updateUserFormInputs>({
    resolver: zodResolver(updateUserSchema),
  });

  const user = useSelector((state: RootState) => state.auth);
  const userAvatar = user?.image;

  const queryClient = useQueryClient();

  async function updateProfile(data: updateUserDTO) {
  
    const formData = new FormData();
    
    // Check if content is provided
    if (data.fullName) {
      formData.append("fullName", data.fullName);
    }
    if (data.userName) {
      formData.append("userName", data.userName);
    }
    if (data.bio) {
      formData.append("bio", data.bio);
    }
    
    // Check if an image is provided
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }
  
    console.log("userId:", user);
  
    const response = await apiV1.patch<null, { data: UserEntity }>("/users", formData);
  
    
  
    return response.data;
  }

  const { mutateAsync: updateProfileAsync } = useMutation<
    UserEntity,
    Error,
    updateUserDTO
  >({
    mutationKey: ["updateProfile"],
    mutationFn: updateProfile,
    onSettled: () => {
      reset(); // Reset form regardless of success or failure
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });

  async function onSubmit(data: updateUserFormInputs) {
    try{
    await updateProfileAsync((data as any));
    // Close the modal and reset the form after successful submission
    onClose();
    reset();
    } catch (error) {
      console.error('Error updatin profile', error)
    }
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent bg="#1D1D1D" borderRadius="20px" padding="20px" maxWidth="500px">
        <IconButton
          aria-label="Close"
          icon={<IoCloseCircleOutline />}
          onClick={onClose}
          color="#909090"
          bgColor="#1D1D1D"
          borderRadius="full"
          fontSize="30px"
          position="absolute"
          right="10px"
          top="10px"
          _hover={{ bg: "#909090.200" }}
          _focus={{ boxShadow: "none" }}
        />
        <Text textColor="white" fontSize="25px" mb={-10}>Edit Profile</Text>
        <ModalBody pt="60px" mb={-6}>
          <Box textAlign="left" ml={-6} mr={-6}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              bgGradient="linear(to-r, #DDE7FF, #8CC5FF)"
              bgImage={user.bannerImg}
              backgroundPosition="center"
              backgroundSize="cover"
              borderRadius="lg"
              height="100px"
              position="relative"
              padding="15px"
            >
              
              <Avatar
                name={user.fullName}
                src={userAvatar}
                size="xl"
                position="absolute"
                bottom="-50px"
                left="15px"
                border="4px solid #1A1A1A"
              />
              <Icon
                as={LuImagePlus}

                mr={5}
                bgColor="#1D1D1D"
                color="white"
                position="absolute"
                borderRadius="full"
                fontSize="25px"
                padding={1}
                bottom="-15px"
                left="51.5px"
              />
            </Box>
            <Box mt="60px">
              <Box mb={3}>
                <Text color="gray.400" fontSize="sm" mb={1}>Name</Text>
                <Input
                  placeholder="Name"
                  variant="outline"
                  color="white"
                  defaultValue={user.fullName}
                  {...register("fullName")}
                />
              </Box>
              <Box mb={3}>
                <Text color="gray.400" fontSize="sm" mb={1}>Username</Text>
                <Input
                  placeholder="Username"
                  variant="outline"
                  color="white"
                  defaultValue={user.userName}
                  {...register("userName")}
                />
              </Box>
              <Box mb={4}>
                <Text color="gray.400" fontSize="sm" mb={1}>Bio</Text>
                <Textarea
                  placeholder="Bio"
                  variant="outline"
                  color="white"
                  resize="none"
                  defaultValue={user.bio}
                  {...register("bio")}
                />
              </Box>
              <Divider width="108.5%" ml={-5} mb={3} />
              <Box display="flex" justifyContent="flex-end" mb={1}>
                <Button
                  borderRadius="full"
                  colorScheme="green"
                >
                  {isSubmitting ? 'Saving...' : 'Save'}
                </Button>
              </Box>
            </Box>
          </form>
          </Box>
        </ModalBody>
      </ModalContent>
      </Modal>
    );
  }
  