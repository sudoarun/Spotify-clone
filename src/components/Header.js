import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <div className="main">
            <div className="m-menu">
                <Link to={'/'}><i className="bi bi-house-door"></i>
                    <div>Home</div>
                </Link>
                <Link to={'search'}><i className="bi bi-search"></i>
                    <div>Search</div>
                </Link>
                <Link to="library"><i className="bi bi-music-note-list"></i>
                    <div>Library</div>
                </Link>
                <Link to={'premium'}><i className="bi bi-spotify"></i>
                    <div>Premiumm</div>
                </Link>
            </div>
        </div>
        </>
    )
}
export default Header;