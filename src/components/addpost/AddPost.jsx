import PostForm from "../postform/PostForm.jsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPost} from "../../api/PostsApi.jsx";
import {v4 as uuidv4} from "uuid";

export default function AddPost() {
    const queryClient = useQueryClient();
    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["posts"]})
        }
    });
    const handleAddPost = (post) => {
        createPostMutation.mutate({
            id:uuidv4(),
            ...post,
        });
    }
    return (
        <>
            <div className="">
                <h1>add new post</h1>
                <PostForm onSubmit={handleAddPost} initialValue={{}}/>
            </div>
        </>
    );
}