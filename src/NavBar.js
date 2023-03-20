import './NavBar.css';
import background from "./Search-Bar-background.png";

export default function NavBar(){
    return(
        <div className="nav-bar">
            <img src={background} alt="Multiple Choices"/>
            <nav>
                <ul>
                    <li><a href="https://stackoverflow.com/">Home</a></li>
                    <li><a href="https://stackoverflow.com/">Post a task</a></li>
                    <li><a href="https://stackoverflow.com/" id="browse">Browse tasks</a></li>
                    <li><a href="https://stackoverflow.com/">About teams</a></li>
                    <li><a href="https://stackoverflow.com/">Log In</a></li>
                </ul>
            </nav>
            <button className="create-account"><a href="https://stackoverflow.com/">Create Account</a></button>
        </div>
    );
}