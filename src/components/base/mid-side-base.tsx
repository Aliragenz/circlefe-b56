import React from 'react';
import { Box, VStack, Text, Divider, Heading, Avatar, Icon, Button, Img } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LuImagePlus } from 'react-icons/lu';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { PiChatCenteredTextLight } from "react-icons/pi";
import { apiV1 } from '@/libs/api';
import { ThreadEntity } from '@/entities/thread';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface MiddleSideProps {
    onOpenModal: () => void;
    onOpenImagePostModal: () => void;
}

export const MiddleSide: React.FC<MiddleSideProps> = ({ onOpenModal, onOpenImagePostModal }) => {

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth);
    const userId = user?.id;
    const userAvatar = user?.image;

    async function getThreads() {
        const response = await apiV1.get<null, { data: ThreadEntity[] }>("/threads");
        return response.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    // Toggle like mutation
    async function toggleLike(threadId: number) {
        const response = await apiV1.patch(`/threads/${threadId}/like`); 
        return response.data;
    }

    const toggleLikeMutation = useMutation({
        mutationFn: (threadId: number) => toggleLike(threadId),
        onMutate: async (threadId) => {
            await queryClient.cancelQueries(["threads"]);
            const previousThreads = queryClient.getQueryData<ThreadEntity[]>(["threads"]);

            queryClient.setQueryData<ThreadEntity[]>(["threads"], (oldThreads) =>
                oldThreads?.map((thread) => {
                    const isLiked = thread.likedBy.includes(userId);
                    return thread.id === threadId
                        ? { 
                            ...thread, 
                            likedBy: isLiked 
                                ? thread.likedBy.filter(id => id !== userId) // Remove the user ID for unlike
                                : [...thread.likedBy, userId], // Add user ID for like
                            likesCount: isLiked ? thread.likesCount - 1 : thread.likesCount + 1 // Update likesCount
                        }
                        : thread;
                })
            );

            return { previousThreads };
        },
        onError: (err, threadId, context) => {
            queryClient.setQueryData(["threads"], context.previousThreads);
            console.error("Error toggling like:", err);
        },
        onSettled: async () => {
            await queryClient.invalidateQueries(["threads"]);
        }
    });

    const { data } = useQuery<ThreadEntity[], Error, ThreadEntity[]>({
        queryKey: ["threads"],
        queryFn: getThreads,
        refetchOnWindowFocus: true,
        refetchInterval: 3000,
    });

    // Sample JSON data
    //     const posts = [
    //         {
    //             id: 1,
    //             avatar: Profile1,
    //             name: "Indah Pra Karya",
    //             username: "@indahpra",
    //             time: "4h",
    //             content: "Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja gitu. Ada aja jalannya augmented reality real time puppet I made. You can try it now went below in the thread.",
    //             likes: 36,
    //             replies: 381,
    //             isLiked: true,
    //         },
    //         {
    //             id: 2,
    //             avatar: Profile2,
    //             name: "Mona",
    //             username: "@nmonarizqa",
    //             time: "17h",
    //             content: "Pernah nggak dapet dream job terus lama-lama ngerasa lah kok tidak seperti yang diharapkan (atau simply lelah) terus fall out of love dengan job/bidang tsb?",
    //             likes: 293,
    //             replies: 381,
    //             isLiked: false,
    //         },
    //         {
    //             id: 3,
    //             avatar: Profile3,
    //             name: "tuantigabelas",
    //             username: "@tuantigabelas",
    //             time: "10h",
    //             content: `Dibanding rekan-rekan media menginterview saya terkait issue yang sedang ramai, ada baiknya mending interview instansi yang memberi izin, BKSDA dll, manfaatkan momen untuk mendorong regulasi menjadi lebih ketat.
    // Ketua MPR kita, Pak Bamsut, juga memelihara singa. Tidak mau push berita ini saja?`,
    //             likes: 293,
    //             replies: 381,
    //             isLiked: false,
    //         },
    //         {
    //             id: 4,
    //             avatar: Profile4,
    //             name: "Compounding Quality",
    //             username: "@QCompounding",
    //             time: "Jul 25",
    //             content: "52 Books you should know:",
    //             image: Sample1,
    //             likes: 293,
    //             replies: 381,
    //             isLiked: false,
    //         },
    //     ];

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
            <Heading size="md" mb={4}>Home</Heading>
            <VStack spacing={4} align="stretch">
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center">
                        <Avatar src={userAvatar} />
                        <Text ml={4} textColor="#909090" onClick={onOpenModal}>What is happening?!</Text>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Icon as={LuImagePlus} w={5} h={5} mr={2} color="green" onClick={onOpenModal} />
                        <Button
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
                            Post
                        </Button>
                    </Box>
                </Box>
                <Divider width="105.5%" marginLeft="-16px" borderColor="#3F3F3F" />

                {/* Map through the posts array */}
                {data?.map((thread) => {
                    return (
                        <div key={thread.id}>
                            <Box display="flex" alignItems="flex-start">
                                <Avatar src={thread.user.image} mr={4} />
                                <Box>
                                    <Box display="flex" alignItems="center" mb={2}>
                                        <Text fontWeight="bold" mr={2}>{thread.user.fullName}</Text>
                                        <Text mr={2} textColor="#909090">@{thread.user.userName}</Text>
                                        <Text textColor="#909090">• {new Date(thread.createdAt).toLocaleString()}</Text>
                                    </Box>
                                    <Text fontSize="14px" whiteSpace="pre-wrap" marginBottom="10px">
                                        {thread.content}
                                    </Text>
                                    {thread.image && (
                                        <Img src={thread.image} borderRadius="15px" height="auto" width="250px" marginBottom="10px" 
                                        onClick={onOpenImagePostModal}
                                        />
                                        )}
                                    <Box display="flex" alignItems="center">
                                        <Box display="flex" alignItems="center" marginRight="25px">
                                            <Icon
                                                as={thread.likedBy.includes(user.id) ? FaHeart : FaRegHeart}
                                                w={5}
                                                h={5}
                                                mr={1}
                                                textColor={thread.likedBy.includes(user.id) ? "red" : "#909090"}
                                                cursor="pointer"
                                                onClick={() => {
                                                    console.log("Toggling like for thread id:", thread.id);
                                                    toggleLikeMutation.mutate(thread.id);
                                                }}
                                            />
                                            <Text textColor="#909090">{thread.likesCount}</Text>
                                        </Box>
                                        <Box display="flex" alignItems="center" onClick={() => navigate('/status')}>
                                            <Icon as={PiChatCenteredTextLight} w={5} h={5} mr={1} textColor="#909090" />
                                            <Text textColor="#909090">{thread.repliesCount} Replies</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Divider width="105.5%" mt={3} marginLeft="-16px" borderColor="#3F3F3F" />
                        </div>
                    );
                })};
            </VStack>
        </Box>
    );
};
