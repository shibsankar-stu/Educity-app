import './hero.css'
import darkarrow from '/src/assets/dark-arrow.png'
function Hero(){
    return(
                <div className="hero container" id='hero'>
                    <div className="hero-text">
                        <h1>We Ensure better education for a better world</h1>
                        <p>Our cutting-edge curriculum is designed to empower 
                            students with the knowledge, skills, and experiences 
                            needed to excel in the dynamic field of education</p>
                        <button className='btn'>Explore more
                            <img src={darkarrow} alt="" />
                        </button>
                    </div>
                </div>
    );
}
export default Hero;