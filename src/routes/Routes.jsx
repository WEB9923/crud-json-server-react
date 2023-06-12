
import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout.jsx";
import EditPost from "../pages/editpost/EditPost.jsx";
import Post from "../pages/post/Post.jsx";
import PostList from "../pages/postlist/PostList.jsx";
const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {path:"/",element:<PostList/>},
            {path:"/post/:id",element:<Post/>},
            {path:"/post/:id/edit",element:<EditPost/>},
        ]
    }
]);
export default Routes;