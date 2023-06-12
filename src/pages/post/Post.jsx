import {useQuery} from "@tanstack/react-query";
import {fetchPost} from "../../api/PostsApi.jsx";
import {useNavigate, useParams} from "react-router-dom";

export default function Post() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {isLoading,
        isError,
        data:post,
        error} = useQuery({
        queryKey:["posts", id],
        queryFn: () => fetchPost(id)
    });
    if(isLoading) return <h1>loading...</h1>
    if(isError) return <h1>error:{error.message}</h1>
    return (
        <>
            <div className="">
                <button onClick={() => navigate("/")}>back to lists</button>
                <h1>{post.data.title}</h1>
                <p>{post.data.body}</p>
            </div>
        </>
    );
}

