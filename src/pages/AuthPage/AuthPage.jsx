import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import './AuthPage.css';

export default function AuthPage ({setUser}) {
    return(
        <div className=" justify-content-center ">
        <h2 className="center">Sign Up</h2>
        <SignUpForm setUser={setUser}/>
        <br></br>
        <br></br>
        <h2 className="center">Log In</h2>
        <LoginForm setUser={setUser}/>
        </div>
    )
}