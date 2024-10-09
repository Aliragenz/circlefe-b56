export interface User {
    id: number,
    fullName: string,
    username?:string,
    image?: FileList,
    bio?:string,
    email:string,
}

export interface updateUserDTO {
    fullName?: string,
    userName?:string,
    image?: FileList,
    bio?:string,
}

export interface Post {
    id: number,
    userId: number,
    title: string,
    body: string,
}