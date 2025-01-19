import { useNavigate } from "react-router-dom";  // Import useNavigate
import './header.css'

function Header() {
    const navigate = useNavigate();  // Hook to navigate between pages

    return (
        <nav className="navbar">
            <div className="logo">Calories Counter & Diet Suggest</div>
            <ul className="nav-links">
                <li><a href="">Home</a></li>
                <li><a href="">Dishes</a></li>
                <li><a href="">Connect</a></li>
                <li><button onClick={() => navigate("/login")}>Login</button> </li>
                <li className="dropdown">
                    <a href="#" className="dropbtn">Profile ▾</a>
                    <div className="dropdown-content">
                        <a href="">My Profile</a>
                        <a href="">Settings</a>
                        <button onClick={() => navigate("/login")}>Login</button> {/* Navigate on click */}
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Header;

//export {function name}