export type Thread = {
    image: string;
    content: string;
    fullname: string;
    username: string;
    createdAt: string;
    likesCount: number;
    repliesCount: number;

}

export type CreateThreadDTO = {
    content: string;
    image: FileList;
    userId: number;
}