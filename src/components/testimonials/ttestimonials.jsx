import { useRef } from 'react'
import '/src/components/testimonials/testimonials.css'
import use1 from '/src/assets/user-1.png'
import use2 from '/src/assets/user-2.png'
import use3 from '/src/assets/user-3.png'
import use4 from '/src/assets/user-4.png'
import next from '/src/assets/next-icon.png'
import back from '/src/assets/back-icon.png'
function Testimonials(){

    const slider = useRef()
    let tx = 0;
     
    const slideForword = ()=> {
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    const slideBackword = ()=> {
        if(tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return(<>
                    <div className="testimonials">
                        <img src={next} alt="" className='next-btn' onClick={slideForword} />
                        <img src={back} alt="" className='back-btn' onClick={slideBackword} />
                        <div className="slider">
                            <ul ref={slider}>
                                <li>
                                    <div className="slide">
                                        <div className="user-info">
                                            <img src={use1} alt="" />
                                            <div>
                                                <h3>William jackson</h3>
                                                <span>Adusity, USA</span>
                                            </div>
                                        </div>
                                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have 
                                            truly exceeded my expectations.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="slide">
                                        <div className="user-info">
                                            <img src={use2} alt="" />
                                            <div>
                                                <h3>William jackson</h3>
                                                <span>Adusity, USA</span>
                                            </div>
                                        </div>
                                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have 
                                            truly exceeded my expectations.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="slide">
                                        <div className="user-info">
                                            <img src={use3} alt="" />
                                            <div>
                                                <h3>William jackson</h3>
                                                <span>Adusity, USA</span>
                                            </div>
                                        </div>
                                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have 
                                            truly exceeded my expectations.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="slide">
                                        <div className="user-info">
                                            <img src={use4} alt="" />
                                            <div>
                                                <h3>William jackson</h3>
                                                <span>Adusity, USA</span>
                                            </div>
                                        </div>
                                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have 
                                            truly exceeded my expectations.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>)
}
export default Testimonials;