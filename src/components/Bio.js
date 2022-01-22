import {FaLinkedinIn} from "react-icons/fa";
function Bio(){
    return (
       <div className="bio">
            <h1 className="name">Oloo Dorcas Achieng</h1>
            <h4 className="occupation">Web Developer</h4>
            <a className="github-link" href="https://github.com/dachieng/">dachieng.github</a>
            <div className="icons">
                 <button >
                    <a href="https://www.linkedin.com/" className="wrap">
                        <FaLinkedinIn />
                        <span>LinkedIn</span>
                    </a>
                </button>
            </div>
       </div>
    )
}

export default Bio;