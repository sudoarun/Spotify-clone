import { Link } from 'react-router-dom';

function Player() {
    return (
        <>
            <div className="playerList spotify container">
                <div>
                    <Link to={'/'}><i className="bi bi-arrow-left-short" style={{ fontSize: "40px" }}></i></Link>
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <img src={require('../images/album/ab67616d0000b273c08202c50371e234d20caf62.jpeg')} alt="" style={{ height: "160px" }}></img>
                </div>
                <h1 className="mt-3">Kesariya (From "Brahmastra")</h1>
                <div className="artist">
                    <div >
                        <img src="https://i.scdn.co/image/ab6761610000f178cb6926f44f620555ba444fca" alt="" style={{ height: "20px", borderRadius: "50%" }} />
                        <a href="/" className='mx-2'>Pritam</a>
                    </div>
                </div>
                <div>
                        <span className='Playtime'>2022 • 1 song, 4 min 28 sec</span>
                    </div>
                <div className='d-flex player-toggle' >
                    <div className='Fav mt-2'>
                        <i className="bi bi-heart-fill"></i>
                        <i className="bi bi-share mx-5"></i>
                    </div>
                    <div style={{marginTop:"-25px"}}>
                        <i className="bi bi-play-circle-fill"></i>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4 songDetail'>
                    <span>1</span>
                    <div className='songDetail'>
                        <span>
                            Kesariya (From "Brahmastra")
                            
                        </span>
                        <p className='artistDetails'>Pritam,Arijit Singh </p>
                    </div>
                    <i class="bi bi-three-dots"></i>
                </div>


            </div>
        </>
    )
}
export default Player;
