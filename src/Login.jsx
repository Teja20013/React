import { useRef } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login()
{
    let username=useRef(null);
    let password=useRef(null);
    let dispatch=useDispatch();
    let navigate=useNavigate();
    let LoginCheck = () => {
        if(username.current.value === "teja" && password.current.value === "teja@123")
        {
            dispatch(login(username.current.value))
            navigate("/home");
        }else{
            alert("your credentials are wrong. check once");
        }
    }
    return(
        <>
        <h2>Login Page</h2>
        <label>User Name:</label>
        <input type="text" ref={username}/>
        <label>Password:</label>
        <input type="password" ref={password}/>
        <button style={{backgroundColor: "gray"}}
        onClick={LoginCheck}>Login</button>
        </>
    )
}
export default Login;