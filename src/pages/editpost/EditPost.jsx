import PostForm from "../../components/postform/PostForm.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {fetchPost, updatePost} from "../../api/PostsApi.jsx";

export default function EditPost() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {id} = useParams();
    const {isLoading,
        isError,
        data:post,
        error} = useQuery({
        queryKey:["posts", id],
        queryFn: () => fetchPost(id)
    });
    const updatedPostMutation = useMutation({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["posts"]});
            navigate("/");
        }
    });
    if(isLoading) return <h1>loading...</h1>
    if(isError) return <h1>error:{error.message}</h1>
    const handleSubmit = (updatedPost) => {
        updatedPostMutation.mutate({id, ...updatedPost})
    }
    return (
        <>
            <PostForm initialValue={post} onSubmit={handleSubmit}/>
        </>
    );
}
