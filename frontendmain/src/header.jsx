import './header.css'
function Header(){
    return(
        //<!-- Navbar -->
    <nav class="navbar">
        <div class="logo">Calories Counter & Diet Suggest</div>
        <ul class="nav-links">
            <li><a href="">Home</a></li>
            <li><a href="">Dishes </a></li>
            <li><a href="">Connect</a></li>
            
            <li class="dropdown">
                <a href="" class="dropbtn">Profile ▾</a>
                <div class="dropdown-content">
                    <a href="">My Profile</a>
                    <a href="">Settings</a>
                    <a href="">Logout</a>
                </div>
            </li>
        </ul>
    </nav>

    )
}

export default Header;
//export {function name}