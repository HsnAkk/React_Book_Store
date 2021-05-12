import Fade from 'react-reveal/Fade';
import './HomePage.scss';

function HomePage() {
    return (
        <div className="home">
            <img src="/images/banner_bg.jpeg" alt="banner bg" />
            <div className="home__text">
                <Fade left>
                    <h5>THE EDITOR'S</h5>
                    <h1>Featured Books of the</h1>
                    <h1>February</h1>
                    <button>See More</button>
                </Fade>
            </div>
            <div className="home__image">
                <Fade right>
                    <img src="/images/banner.png" alt="banner books"/>
                </Fade>
            </div>
        </div>
    )
}

export default HomePage
