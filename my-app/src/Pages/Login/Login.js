import { useNavigate } from "react-router-dom";
import "./Login.css";
export function Login(){
    const navigate = useNavigate();
   
    return(
        <div className="flex-wrapper">
            <section className="flex-container">
                <h2 className="login-head">Sign into your account</h2>
                <div className="field-container">
                    <input type="text" className="email" placeholder="Email/Phone number" />
                </div>
                <div className="field-container">
                    <input type="password" className="password" placeholder="Password" />
                </div>
                <div className="login__button--container">
                    <button className="login__button"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(`/main`);
                    }}
                    >
                        Login
                    </button>
                </div>
            </section>
        </div>
    )
}