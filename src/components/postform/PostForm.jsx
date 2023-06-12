import {useState} from "react";
import "./PostForm.scss";

export default function PostForm({onSubmit,initialValue}) {
    const [post, setPost] = useState({
        title: initialValue.title || "",
        body: initialValue.body || ""
    });
    const handleChange = (e) => {
        setPost({...post,
            [e.target.name]: e.target.value}
        )
    }
    const Field = (label) => (
        <div>
            <label htmlFor={label}>{label}</label>
            <input onChange={handleChange}
                   id={label}
                   type="text"
                   name={label.toLowerCase()}
                   placeholder={label}
                   value={post[label].toLowerCase()}/>
        </div>
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(post);
        setPost({
            title:"",
            body:""
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                {Field('title')}
                {Field('body')}
                <button type="submit">submit</button>
            </form>
        </>
    );
}
