import { Link } from "react-router-dom";

function Search() {
    return (
        <>
            <section className="search spotify">
                <div className="container-fluid mt-5">
                    <div className="mb-2">
                        <span className="searchText">Search</span>
                    </div>
                    <div>
                        <Link to={'recent'}>
                            <div className="searchBar">
                                <i className="bi bi-search"></i>
                                <span>What do you want to listen to?</span>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-3">
                        <span className="text-white">Browse all</span>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#0F3460" }}>
                                <span className="text-white">Podcasts</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className=" podcast" style={{ backgroundColor: "rgb(141, 103, 171)" }}>
                                <span className="text-white">Made For You</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className=" podcast" style={{ backgroundColor: "#674747" }}>
                                <span className="text-white">Charts</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className=" podcast" style={{ backgroundColor: "#790252" }}>
                                <span className="text-white">New Releases</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#395B64" }}>
                                <span className="text-white">Discover</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#7F5283" }}>
                                <span className="text-white">Live Events</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#513252" }}>
                                <span className="text-white">Bollywood</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#2C3639" }}>
                                <span className="text-white">Punjabi</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#4C3A51" }}>
                                <span className="text-white">Tamil</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#51557E" }}>
                                <span className="text-white">Telgu</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#4C3575" }}>
                                <span className="text-white">Indie</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#2E0249" }}>
                                <span className="text-white">Gaming</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#15133C" }}>
                                <span className="text-white">EQUAL</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#112B3C" }}>
                                <span className="text-white">Pop</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#363062" }}>
                                <span className="text-white">Radar</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#CC704B" }}>
                                <span className="text-white">Fresh Finds</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#22577E" }}>
                                <span className="text-white">Marathi</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#062C30" }}>
                                <span className="text-white">Wellness</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#151D3B" }}>
                                <span className="text-white">Devotional</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="podcast" style={{ backgroundColor: "#B8405E" }}>
                                <span className="text-white">Indian Classical</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Search;