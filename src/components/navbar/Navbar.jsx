import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                height:"70px",
                backgroundColor:"#eeeeee",
                padding:"0 50px"
            }}>
                <h1>logo</h1>
                <ul>
                    <li><Link to={"/"}>home</Link></li>
                </ul>
            </nav>
        </>
    );
}