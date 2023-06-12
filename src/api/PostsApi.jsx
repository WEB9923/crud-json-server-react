import axios from "axios";

export async function fetchPosts() {
    return await axios.get("http://localhost:8000/posts");
}

export async function fetchPost(id) {
    return await axios.get(`http://localhost:8000/posts/${id}`);
}

export async function createPost(newPost) {
    return await axios.post(`http://localhost:8000/posts`, newPost);
}

export async function updatePost(updatedPost) {
    return await axios.put(`http://localhost:8000/posts/${updatedPost.id}`, updatedPost);
}