import '/src/components/campus/campus.css'
import gallery1 from '/src/assets/gallery-1.png'
import gallery2 from '/src/assets/gallery-2.png'
import gallery3 from '/src/assets/gallery-3.png'
import gallery4 from '/src/assets/gallery-4.png'
import arrow from '/src/assets/white-arrow.png'
function Campus(){
    return (<>
                <div className="campus">
                    <div className="gallay">
                        <img src={gallery1} alt="" />
                        <img src={gallery2} alt="" />
                        <img src={gallery3} alt="" />
                        <img src={gallery4} alt="" />
                    </div>
                    <button className='btn darkbtn'>See more here <img src={arrow} alt="" /></button>
                </div>
                </>);
}
export default Campus;