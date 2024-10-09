import { useFetchData } from "@/hooks/use-fetch-data"
import { Post } from "@/types/user";

export function UserPost() {
    const {data: posts} = useFetchData<Post>({
        url: "https://jsonplaceholder.typicode.com/posts",
    });
    
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <hr />
                    <li>User Id :{post.userId}</li>
                    <li>Id :{post.id}</li>
                    <li>Title :{post.title}</li>
                    <li>Body :{post.body}</li>
                    <hr/>
                    <br />
                    </div>
                )
            })}
        </ul>
    )
}