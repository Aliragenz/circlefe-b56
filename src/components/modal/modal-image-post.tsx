import { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  IconButton,
  Avatar,
  Box,
  Icon,
  Divider,
  Img,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuImagePlus } from 'react-icons/lu';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import SampleImage from '@/img/img1.jpg';
import Profile1 from "@/img/girl3.jpg";
import Profile2 from "@/img/girl1.jpg";
import Profile3 from "@/img/man6.jpg";
import Profile4 from "@/img/man7.jpg";
import Profile5 from "@/img/girl7.jpg";
import Profile6 from "@/img/girl8.jpg";
import Profile7 from "@/img/man8.jpg";


interface ModalImagePostProps {
  isOpen: boolean;
  onClose: () => void;
}

const userInputText = `Sering banget. Lebih sering deg2annya daripada nyantainya. Karena sandwich gen, mau di planning in kaya apa juga, selalu ada kedaruratan tiap saat.

Tapi selalu terselamatkan. Sering bet ada rejeki nomplok pas injury time. Cape bat ya Allah.`;

export function ModalImagePost({ isOpen, onClose }: ModalImagePostProps) {
    const { onToggle } = useDisclosure();
    const [isPanelOpen, setIsPanelOpen] = useState(true);

    
  
    // Open the panel when the modal is opened
    useEffect(() => {
      if (isOpen) {
        setIsPanelOpen(true); // Reset panel to open state when modal opens
      }
    }, [isOpen]);
  
    // Toggle panel open/closed
    const handleToggle = () => {
      setIsPanelOpen(prev => !prev);
      onToggle();
    };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered size="full">
      <ModalOverlay />
      <ModalContent
        bg="#1D1D1D"
        maxWidth="98vw"
        height="90vh"
        display="flex"
        flexDirection="row"
        padding="0"
        overflow="hidden"
        sx={{
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
        }}
      >
        {/* Image Side */}
        <Box
          width={isPanelOpen ? "60%" : "60%"}
          position="relative"
          height="100%"
          transform={isPanelOpen ? 'translateX(0)' : 'translateX(33.5%)'}
          transition="transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s ease"
        >
          <IconButton
            aria-label="Close"
            icon={<IoCloseCircleOutline />}
            onClick={onClose}
            color="white"
            bgColor="transparent"
            fontSize="30px"
            position="absolute"
            top="10px"
            left="10px"
            _hover={{ bg: "rgba(0, 0, 0, 0.1)" }}
            _focus={{ boxShadow: "none" }}
          />
          <IconButton
            aria-label="Collapse"
            icon={isPanelOpen ? <IoIosArrowDropright /> : <IoIosArrowDropleft />}
            onClick={handleToggle}
            position="absolute"
            top="10px"
            fontSize="30px"
            right="10px"
            color="white"
            bgColor="transparent"
            _hover={{ bg: "rgba(0, 0, 0, 0.1)" }}
            _focus={{ boxShadow: "none" }}
          />
          <Img
            src={SampleImage}
            width="100%"
            height="100%"
            objectFit="cover"
            borderRight="solid 1px"
            borderColor="#555"
          />
        </Box>

        {/* Comment Side */}
        <Box
          width={isPanelOpen ? "40%" : "0%"}
          bg="#1D1D1D"
          color="white"
          borderLeft="solid 1px"
          borderColor="#3F3F3F"
          p={4}
          
          ml={2}
          display="flex"
          flexDirection="column"
          overflowY="auto"
          transition="transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s ease"
          transform={isPanelOpen ? 'translateX(0%)' : 'translateX(100%)'}
          opacity={isPanelOpen ? 1 : 0}
          boxShadow={isPanelOpen ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none'}
          sx={{
            '&::-webkit-scrollbar': {
              width: '0px',
              background: 'transparent',
            },
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
          }}
        >
          {/* List of Comments */}
          <VStack spacing={4} align="stretch" width="100%">
            {/* Reply */}
            <Box display="flex" alignItems="flex-start">
              <Avatar src={Profile2} mr={4} />
              <Box>
                <Box display={"flex"} alignItems="center" mb={0}>
                  <Text fontWeight="bold" mr={2}>Indah Pra Karya</Text>
                  <Text mr={2} textColor="#909090">@indahpra</Text>
                
                  <Text textColor="#909090" mr={1}>•</Text>
                  <Text textColor="#909090">12h</Text>
                </Box>
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                  Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja gitu. Ada aja jalannya
                </Text>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" marginRight="25px">
                    <Icon as={FaHeart} w={5} h={5} mr={1} textColor="#D71913" />
                    <Text textColor="#909090">36</Text>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">381 Replies</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider width="107.5%" marginLeft="-16px" borderColor="#3F3F3F" />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Avatar src={Profile1} />
                <Text ml={4} textColor="#909090">Type your reply!</Text>
              </Box>
              <Box display="flex" alignItems="center">
                <Icon as={LuImagePlus} w={5} h={5} mr={2} color="green" />
                <Button
                  mr={5}
                  colorScheme='green'
                  borderRadius="15px"
                  size="xs"
                  isDisabled
                  bg="#005E0E"
                  _disabled={{
                    bg: '#005E0E',
                    color: 'gray.300',
                    cursor: 'not-allowed',
                    opacity: 1
                  }}
                >
                  Reply
                </Button>
              </Box>
            </Box>
            <Divider width="107.5%" marginLeft="-16px" borderColor="#3F3F3F" />

            {/* Comment 2 */}
            <Box display="flex" alignItems="flex-start">
              <Avatar src={Profile3} mr={4} />
              <Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Text fontWeight="bold" mr={2}>ngab-ngaban the explorer</Text>
                  <Text mr={2} textColor="#909090">@devilbreak</Text>
                  <Text textColor="#909090">• 4h</Text>
                </Box>
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                  Untuk 6 tahun terakhir, yes hahaha! Bukan bermaksud buat ngepush luck sampe batas terakhir, tapi semesta belum juga melunak 😢
                </Text>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" marginRight="25px">
                    <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">75</Text>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">381 Replies</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider width="107.5%" marginLeft="-16px" borderColor="#3F3F3F" />

            {/* Comment 3 */}
            <Box display="flex" alignItems="flex-start">
              <Avatar src={Profile4} mr={4} />
              <Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Text fontWeight="bold" mr={2}>Putra</Text>
                  <Text mr={2} textColor="#909090">@rzkiypratama</Text>
                  <Text textColor="#909090">• 18h</Text>
                </Box>
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                  Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa survive, ada aja rejekinya, sampai hari pecah telor tiba pas kondisi bener2 0 duit 🥺
                </Text>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" marginRight="25px">
                    <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">43</Text>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">381 Replies</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider width="107.5%" marginLeft="-16px" borderColor="#3F3F3F" />

            {/* Comment 4 */}
            <Box display="flex" alignItems="flex-start">
              <Avatar src={Profile5} mr={4} />
              <Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Text fontWeight="bold" mr={2}>Menantu Idaman Ibumu</Text>
                  <Text mr={2} textColor="#909090">@ninanenen</Text>
                  <Text textColor="#909090">• 10h</Text>
                </Box>
                <Text fontSize="14px" textAlign="justify" marginBottom="10px" whiteSpace="pre-wrap">
                  {userInputText}
                </Text>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" marginRight="25px">
                    <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">3</Text>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">381 Replies</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider width="107.5%" marginLeft="-16px" borderColor="#3F3F3F" />

            {/* Comment 5 */}
            <Box display="flex" alignItems="flex-start">
              <Avatar src={Profile6} mr={4} />
              <Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Text fontWeight="bold" mr={2}>jena 👋🏻</Text>
                  <Text mr={2} textColor="#909090">@sweetbubbly</Text>
                  <Text textColor="#909090">• 6h</Text>
                </Box>
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                  Pas kmrn2 lg parah2nya punya kucing sampe 10 ekor pernah.. gangerti gmn tau2 ada aja rejeki buat beli makan sm pasir mereka
                </Text>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" marginRight="25px">
                    <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">139</Text>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">381 Replies</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider width="107.5%" marginLeft="-16px" borderColor="#3F3F3F" />

            {/* Comment 6 */}
            <Box display="flex" alignItems="flex-start">
              <Avatar src={Profile7} mr={4} />
              <Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <Text fontWeight="bold" mr={2}>Tama</Text>
                  <Text mr={2} textColor="#909090">@josiSRG</Text>
                  <Text textColor="#909090">• 8h</Text>
                </Box>
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                  Sering wkwk. Kuncinya percaya kalau tetep akan bisa survive
                </Text>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" marginRight="25px">
                    <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">81</Text>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                    <Text textColor="#909090">381 Replies</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider width="107.5%" marginLeft="-16px" borderColor="#3F3F3F" />
          </VStack>
        </Box>
      </ModalContent>
    </Modal>
  );
}


