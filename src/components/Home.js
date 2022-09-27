import { Link } from "react-router-dom";
import Slider from "react-slick";

function Home() {
    const list = {
        infinite: false,
        slidesToShow: 2.3,
        slidesToScroll: 3
    }
    return (
        <>
            <div className="spotify">
            <div className="settings container-fluid">
                <div>
                    <h3 className="mt-4 mb-5">Hello User</h3>
                </div>
                <div>
                   <Link to={'user'} ><i className="bi bi-gear"></i></Link>
                </div>
            </div>
            <section className="container-fluid content">
                <div>
                    <h4 className="recent">Popular albums</h4>
                    <Slider className="row" {...list}>
                        <div className="col">
                            <Link to={'player'}><img src={require('../images/album/ab67616d0000b273c08202c50371e234d20caf62.jpeg')} alt="" /></Link>
                            <span>Manike</span>
                        </div>
                        <div className="col">
                            <img src={require('../images/album/ab67616d0000b273add9090d249f28f388322fc9.jpeg')} alt="" />
                            <span>Baadshah</span>
                        </div>
                        <div className="col">
                            <img src={require('../images/album/ab67616d0000b2733f3d35703bdcd917dad51c4f.jpeg')} alt="" />
                            <span>Honey Singh</span>
                        </div>
                        <div className="col">
                            <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                            <span>Bilal Saeed</span>
                        </div>
                    </Slider>
                </div>
                <div className="mt-3">
                    <h5 className="recent">Trending Now</h5>
                    <div>
                        <Slider className="row" {...list}>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Manike</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Baadshah</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Honey Singh</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Bilal Saeed</span>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="mt-3">
                    <h5 className="recent">Charts</h5>
                    <div>
                        <Slider className="row" {...list}>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b273c08202c50371e234d20caf62.jpeg')} alt="" />
                                <span>Manike</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b273add9090d249f28f388322fc9.jpeg')} alt="" />
                                <span>Baadshah</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b2733f3d35703bdcd917dad51c4f.jpeg')} alt="" />
                                <span>Honey Singh</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Bilal Saeed</span>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="mt-3">
                    <h5 className="recent">Punjabi Beats</h5>
                    <div>
                        <Slider className="row" {...list}>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Manike</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Baadshah</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Honey Singh</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/ab67616d0000b27339fe640ab73db368eeac0f90.jpeg')} alt="" />
                                <span>Bilal Saeed</span>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="mt-3">
                    <h5 className="recent">Focus</h5>
                    <div>
                        <Slider className="row" {...list}>
                            <div className="col">
                                <img src={require('../images/album/Focus/ab67706f0000000222a1ae968a3fa0c6dd846bcf.jpeg')} alt="" />
                                <span>Manike</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/Focus/ab67706f000000025551996f500ba876bda73fa5.jpeg')} alt="" />
                                <span>Baadshah</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/Focus/ab67706f00000002724554ed6bed6f051d9b0bfc.jpeg')} alt="" />
                                <span>Honey Singh</span>
                            </div>
                            <div className="col">
                                <img src={require('../images/album/Focus/ab67706f00000002ca5a7517156021292e5663a6.jpeg')} alt="" />
                                <span>Bilal Saeed</span>
                            </div>
                        </Slider>
                    </div>
                </div>




            </section>
            </div>
            
        </>
    )
}
export default Home;