import AddPost from "../../components/addpost/AddPost.jsx";
import {useQuery} from "@tanstack/react-query";
import {fetchPosts} from "../../api/PostsApi.jsx";
import "./PostList.scss";
import {useNavigate} from "react-router-dom";

export default function PostList() {
    const navigate = useNavigate();
    const {isLoading,
        isError,
        data:posts,
        error} = useQuery({
        queryKey:["posts"],
        queryFn: fetchPosts
    });

    if(isLoading) return <h1>loading...</h1>
    if(isError) return <h1>error:{error.message}</h1>

    return (
        <>
            <AddPost/>
            lists:
            {posts?.data.map((post) => {
                return (
                    <div className="post" key={post.id}>
                        <h4 onClick={() => navigate(`/post/${post.id}`)}>{post.title}</h4>
                        <p>{post.body}</p>
                        <div className="">
                            <button onClick={() => navigate(`/post/${post.id}/edit`)}>edit</button>
                            <button>delete</button>
                        </div>
                    </div>
                )
            })}
        </>
    );
}