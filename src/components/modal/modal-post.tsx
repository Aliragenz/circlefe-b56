import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Textarea,
  IconButton,
  Avatar,
  HStack,
  Box,
  Icon,
  Divider
} from '@chakra-ui/react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuImagePlus } from 'react-icons/lu';
import { CreateThreadFormInputs, createThreadSchema } from '../schema/thread';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { CreateThreadDTO } from '@/types/thread';
import { ThreadEntity } from '@/entities/thread';
import { apiV1 } from '@/libs/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface ModalPostProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalPost({ isOpen, onClose }: ModalPostProps) {
  const { register, handleSubmit, reset, watch, formState: { isSubmitting } } = useForm<CreateThreadFormInputs>({
    resolver: zodResolver(createThreadSchema),
  });

  const textareaContent = watch("content", "");
  const isPostButtonEnabled = textareaContent.trim() !== "";
  const userId = useSelector((state: RootState) => state.auth.id);
  const user = useSelector((state: RootState) => state.auth);
  const userAvatar = user?.image;

  const queryClient = useQueryClient();

  async function createThread(data: CreateThreadDTO) {
    const formData = new FormData();
    
    // Check if content is provided
    if (data.content) {
      formData.append("content", data.content);
    }
    
    // Check if an image is provided
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }
  
    formData.append("userId", (userId as any));
  
    console.log("userId:", user);
  
    const response = await apiV1.post<null, { data: ThreadEntity }>("/threads", formData);
  
    queryClient.invalidateQueries({ queryKey: ["threads"] });
  
    return response.data;
  }
  

  const { mutateAsync: createThreadAsync } = useMutation<
    ThreadEntity,
    Error,
    CreateThreadDTO
  >({
    mutationKey: ["createThread"],
    mutationFn: createThread,
    onSettled: () => {
      reset(); // Reset form regardless of success or failure
    },
  });

  async function onSubmit(data: CreateThreadFormInputs) {
    await createThreadAsync((data as any));
    // Close the modal and reset the form after successful submission
    onClose();
    reset();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <HStack spacing={3}>
              <Avatar name="User Avatar" src={userAvatar} size="sm" ml="-5" mt="-7" />
              <Textarea
                placeholder="What is happening?!"
                variant="unstyled"
                resize="none"
                color="white"
                minHeight="40px"
                focusBorderColor="transparent"
                {...register("content")}
              />
            </HStack>
            <Divider marginLeft="-27" width="112.5%" />
          </ModalBody>
          <Box display="flex" justifyContent="space-between" mt={4}>
          <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }} // Hide the input
              {...register("image")}
              onChange={(e) => {
                if (e.target.files) {
                  // Call the onChange handler to set the value in the form
                  register("image").onChange(e);
                }
              }}
            />
            <Icon
              as={LuImagePlus}
              w={5}
              h={5}
              mr={2}
              ml={2}
              mt={2}
              color="green"
              cursor="pointer" // Change cursor to pointer for better UX
              onClick={() => {
                // Trigger the file input click
                const fileInput = document.querySelector('input[type="file"]');
                fileInput?.click();
              }}
            />
            <Button
              colorScheme='green'
              isDisabled={!isPostButtonEnabled}
              bg={!isPostButtonEnabled ? "#005E0E" : "#008A0E"}
              mr={2}
              _disabled={{
                bg: '#005E0E',
                color: 'gray.300',
                cursor: 'not-allowed',
                opacity: 1
              }}
              borderRadius="full"
              px={5}
              size="md"
              type="submit"
            >
              {isSubmitting ? 'Posting...' : 'Post'}
            </Button>
          </Box>
        </form>
      </ModalContent>
    </Modal>
  );
}

