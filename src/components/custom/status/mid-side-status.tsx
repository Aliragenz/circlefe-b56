import React from 'react';
import { Box, VStack, Text, Divider, Heading, Avatar, Icon, Button, Img } from '@chakra-ui/react';
import Profile1 from "@/img/girl3.jpg";
import Profile2 from "@/img/girl1.jpg";
import Profile3 from "@/img/man6.jpg";
import Profile4 from "@/img/man7.jpg";
import Profile5 from "@/img/girl7.jpg";
import Profile6 from "@/img/girl8.jpg";
import Profile7 from "@/img/man8.jpg";
import Sample1 from "@/img/sample1.jpg";
import { LuImagePlus } from 'react-icons/lu';
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CustomSpace = ({ height = '16px' }) => (
    <Box height={height} />
  );

const userInputText = `Sering banget. Lebih sering deg2annya daripada nyantainya. Karena sandwich gen, mau di planning in kaya apa juga, selalu ada kedaruratan tiap saat.

Tapi selalu terselamatkan. Sering bet ada rejeki nomplok pas injury time. Cape bat ya Allah.`;

const status = [
{
    id: 1,
            avatar: Profile1,
            name: "Indah Pra Karya",
            username: "@indahpra",
            time: "4h",
            content: "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja gitu. Ada aja jalannya augmented reality real time puppet I made. You can try it now went below in the thread.",
            likes: 36,
            replies: 381,
            isLiked: true,
},
{
    id : 2,
    avatar: Profile1,
    name: "ngab-ngaban the explorer",
    username: "@devilbreak" ,
    time : "4h" ,
    content : "Untuk 6 tahun terakhir, yes hahaha! Bukan bermaksud buat ngepush luck sampe batas terakhir, tapi semesta belum juga melunak 😢" ,
    likes: 75,
    replies: 381,
    isLiked: false,
},
{
    id : 3,
    avatar: Profile1,
    name: "putra",
    username: "@devilbreak" ,
    time : "4h" ,
    content : "Untuk 6 tahun terakhir, yes hahaha! Bukan bermaksud buat ngepush luck sampe batas terakhir, tapi semesta belum juga melunak 😢" ,
    likes: 75,
    replies: 381,
    isLiked: false,
},
]

interface MiddleSideProps {
  onOpenModal: () => void;
}

export const MiddleSide: React.FC<MiddleSideProps> = ({ onOpenModal }) => {

    const navigate = useNavigate(); // Initialize navigate

    return (
        <Box w="47%" bg="#1A1A1A" p={4} color="white" borderLeft="solid" height="100vh" borderRight="solid" borderColor="#3F3F3F" borderWidth="1px" overflowY="auto"
            sx={{
                '&::-webkit-scrollbar': {
                    width: '0px',
                    background: 'transparent',
                },
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none',
            }}>
            <Heading size="md" mb={4} display="flex" alignItems="center">
                <Icon as={FaArrowLeft} mr={3} onClick={() => navigate('/')}></Icon>
                <Text textColor="#FFFFFF">Status</Text>
            </Heading>
            <VStack spacing={4} align="stretch">
                <Box display="flex" alignItems="flex-start">
                {/* Avatar */}
                <Avatar 
                    src={Profile2} 
                    mr={4} // Margin to the right of the Avatar to separate it from the text
                />
    
                {/* Text Container */}
                <Box>
                    {/* Header Row: Name, Username, and Time */}
                    <Box alignItems="center" mb={0}>
                        <Text fontWeight="bold" mr={2}>Indah Pra Karya</Text>
                        <Text mr={2} textColor="#909090" >@indahpra</Text>
                        
                    </Box>
                </Box>
                </Box>
                {/* Long Text */}
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                    Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja gitu. Ada aja jalannya
                </Text>
                <Box display="flex" fontSize="15px">
                    <Text textColor="#909090" mr={1}>11:32 PM</Text>
                    <Text textColor="#909090" mr={1}>•</Text>
                    <Text textColor="#909090">Jul 26, 2023</Text>
                </Box>

                <Box display="flex" alignItems="center">
                    
                    {/* Left side: Heart and 36 */}
                    <Box display="flex" alignItems="center" marginRight="25px">
                        <Icon as={FaHeart} w={5} h={5} mr={1} textColor="#D71913" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">36</Text>
                    </Box>
    
                    {/* Right side: PiChat and 381 Replies */}
                    <Box display="flex" alignItems="center">
                        <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1}  textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">381 Replies</Text>
                    </Box>
                </Box>
                
                <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Avatar src={Profile1} />
                        <Text ml={4} textColor="#909090" onClick={onOpenModal}>Type your reply!</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Icon as={LuImagePlus} w={5} h={5} mr={2} color="green" onClick={onOpenModal} />
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
                <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />
                <Box display="flex" alignItems="flex-start">
                {/* Avatar */}
                <Avatar 
                    src={Profile3} 
                    mr={4} // Margin to the right of the Avatar to separate it from the text
                />
    
                {/* Text Container */}
                <Box>
                    {/* Header Row: Name, Username, and Time */}
                    <Box display="flex" alignItems="center" mb={2}>
                        <Text fontWeight="bold" mr={2}>ngab-ngaban the explorer</Text>
                        <Text mr={2} textColor="#909090" >@devilbreak</Text>
                        <Text textColor="#909090">• 4h</Text> {/* Changed "4h" to "• 4h" */}
                    </Box>
        
                {/* Long Text */}
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                Untuk 6 tahun terakhir, yes hahaha! Bukan bermaksud buat ngepush luck sampe batas terakhir, tapi semesta belum juga melunak 😢
                </Text>

                <Box display="flex" alignItems="center">
                    {/* Left side: Heart and 36 */}
                    <Box display="flex" alignItems="center" marginRight="25px">
                        <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">75</Text>
                    </Box>
    
                    {/* Right side: PiChat and 381 Replies */}
                    <Box display="flex" alignItems="center">
                        <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1}  textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">381 Replies</Text>
                    </Box>
                </Box>
                </Box>
                </Box>
                <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />
                <Box display="flex" alignItems="flex-start">
                {/* Avatar */}
                <Avatar 
                    src={Profile4} 
                    mr={4} // Margin to the right of the Avatar to separate it from the text
                />
    
                {/* Text Container */}
                <Box>
                    {/* Header Row: Name, Username, and Time */}
                    <Box display="flex" alignItems="center" mb={2}>
                        <Text fontWeight="bold" mr={2}>Putra</Text>
                        <Text mr={2} textColor="#909090" >@rzkiypratama</Text>
                        <Text textColor="#909090">• 18h</Text>
                    </Box>
        
                {/* Long Text */}
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa survive, ada aja rejekinya, sampai hari pecah telor tiba pas kondisi bener2 0 duit 🥺
                </Text>

                <Box display="flex" alignItems="center">
                    {/* Left side: Heart and 36 */}
                    <Box display="flex" alignItems="center" marginRight="25px">
                        <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">43</Text>
                    </Box>
    
                    {/* Right side: PiChat and 381 Replies */}
                    <Box display="flex" alignItems="center">
                        <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1}  textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">381 Replies</Text>
                    </Box>
                </Box>
                </Box>
                </Box>
                <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />
                <Box display="flex" alignItems="flex-start">
                {/* Avatar */}
                <Avatar 
                    src={Profile5} 
                    mr={4} // Margin to the right of the Avatar to separate it from the text
                />
    
                {/* Text Container */}
                <Box>
                    {/* Header Row: Name, Username, and Time */}
                    <Box display="flex" alignItems="center" mb={2}>
                        <Text fontWeight="bold" mr={2}>Menantu Idaman Ibumu</Text>
                        <Text mr={2} textColor="#909090" >@ninanenen</Text>
                        <Text textColor="#909090">• 10h</Text>
                    </Box>
        
                {/* Long Text */}
                <Text fontSize="14px" textAlign="justify" marginBottom="10px" whiteSpace="pre-wrap">
                    {userInputText}
                </Text>

                <Box display="flex" alignItems="center">
                    {/* Left side: Heart and 36 */}
                    <Box display="flex" alignItems="center" marginRight="25px">
                        <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">3</Text>
                    </Box>
    
                    {/* Right side: PiChat and 381 Replies */}
                    <Box display="flex" alignItems="center">
                        <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1}  textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">381 Replies</Text>
                    </Box>
                </Box>
                </Box>
                </Box>
                <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />
                <Box display="flex" alignItems="flex-start">
                {/* Avatar */}
                <Avatar 
                    src={Profile6} 
                    mr={4} // Margin to the right of the Avatar to separate it from the text
                />
    
                {/* Text Container */}
                <Box>
                    {/* Header Row: Name, Username, and Time */}
                    <Box display="flex" alignItems="center" mb={2}>
                        <Text fontWeight="bold" mr={2}>jena 👋🏻</Text>
                        <Text mr={2} textColor="#909090" >@sweetbubbly</Text>
                        <Text textColor="#909090">• 6h</Text>
                    </Box>
        
                {/* Long Text */}
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                Pas kmrn2 lg parah2nya punya kucing sampe 10 ekor pernah.. gangerti gmn tau2 ada aja rejeki buat beli makan sm pasir mereka
                </Text>

                <Box display="flex" alignItems="center">
                    {/* Left side: Heart and 36 */}
                    <Box display="flex" alignItems="center" marginRight="25px">
                        <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">139</Text>
                    </Box>
    
                    {/* Right side: PiChat and 381 Replies */}
                    <Box display="flex" alignItems="center">
                        <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1}  textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">381 Replies</Text>
                    </Box>
                </Box>
                </Box>
                </Box>
                <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />
                <Box display="flex" alignItems="flex-start">
                {/* Avatar */}
                <Avatar 
                    src={Profile7} 
                    mr={4} // Margin to the right of the Avatar to separate it from the text
                />
    
                {/* Text Container */}
                <Box>
                    {/* Header Row: Name, Username, and Time */}
                    <Box display="flex" alignItems="center" mb={2}>
                        <Text fontWeight="bold" mr={2}>Tama</Text>
                        <Text mr={2} textColor="#909090" >@josiSRG</Text>
                        <Text textColor="#909090">• 8h</Text>
                    </Box>
        
                {/* Long Text */}
                <Text fontSize="14px" textAlign="justify" marginBottom="10px">
                Sering wkwk. Kuncinya percaya kalau tetep akan bisa survive
                </Text>

                <Box display="flex" alignItems="center">
                    {/* Left side: Heart and 36 */}
                    <Box display="flex" alignItems="center" marginRight="25px">
                        <Icon as={FaRegHeart} w={5} h={5} mr={1} textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">81</Text>
                    </Box>
    
                    {/* Right side: PiChat and 381 Replies */}
                    <Box display="flex" alignItems="center">
                        <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1}  textColor="#909090" /> {/* Margin right for spacing */}
                        <Text textColor="#909090">381 Replies</Text>
                    </Box>
                </Box>
                </Box>
                </Box>
                <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />
            </VStack>
        </Box>
    );
};
