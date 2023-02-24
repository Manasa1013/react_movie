import { Link } from "react-router-dom";
import "./Navbar.css";
export function Navbar(){
    return (
        <>
        <nav className="nav">
            <div className="flex-row-container">
               <span className="title">Movies</span>
               <div className="inline">
                <input type="search" className="search__input" placeholder="Search" />
               </div>
                <div className="flex-list">
                    <Link to="/main" >Home</Link>
                    <Link to="/main" >Language</Link>
                    <Link to="/main" >Genre</Link>
                    <Link to="/main" >Account</Link>

                </div>
            </div>
        </nav>
        </>
    )
}