import { Link } from "react-router-dom";

function Recent() {
    return (
        <>
            <div className="recentComp spotify">
                <div className="recentSearch">
                    <Link to={'/search'}>
                        <i class="bi bi-arrow-left-short"></i>
                    </Link>
                    <input type="text" ></input>
                </div>
                <div className="container mt-4">
                    <h1>Play what you love</h1>
                    <h2 className="mt-4">Search for artists, songs, podcasts, audiobooks and more.</h2>
                </div>
            </div>
        </>
    )
}
export default Recent;