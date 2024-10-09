import { UserEntity } from "./user";

export interface ThreadEntity {
    id: number;
    content: string;
    image: string;
    likesCount: number;
    repliesCount: number;
    replies: Reply[];
    likedBy: number[]; // Users who liked this thread
    userId: number;
    user: UserEntity;
    createdAt: Date;
    updatedAt: Date;
}

interface Reply {
    id: number;
    userId: number;
    content: string;
    createdAt: string;
    user: {
        id: number;
        fullName: string;
        userName: string;
        image: string;
    };
}