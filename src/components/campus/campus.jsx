import '/src/components/campus/campus.css'
function Campus(){
    return (<>
                <div className="campus">
                    <div className="gallay">
                        <img src="src/assets/gallery-1.png" alt="" />
                        <img src="src/assets/gallery-2.png" alt="" />
                        <img src="src/assets/gallery-3.png" alt="" />
                        <img src="src/assets/gallery-4.png" alt="" />
                    </div>
                    <button className='btn darkbtn'>See more here <img src="src/assets/white-arrow.png" alt="" /></button>
                </div>
                </>);
}
export default Campus;