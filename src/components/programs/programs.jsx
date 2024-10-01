import '/src/components/programs/programs.css'
import program1 from '/src/assets/program-1.png'
function Program(){
    return(<>
    <div className='programs'>
        <div className="program">
            <img src= {program1} alt="" />
            <div className="caption">
                <img src="src/assets/program-icon-1.png" alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src="./src/assets/program-2.png" alt="" />
            <div className="caption">
                <img src="./src/assets/program-icon-2.png" alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src="./src/assets/program-2.png" alt="" />
            <div className="caption">
                <img src="./src/assets/program-icon-3.png" alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
        </div>
    </>)
}
export default Program;