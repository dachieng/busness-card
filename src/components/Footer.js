import { FaInstagram,FaGithub,FaLinkedinIn,FaFacebook } from "react-icons/fa";

function Footer(){
    return (
        <div className="footer">
            <FaFacebook className="icon"/>
            <FaLinkedinIn className="icon"/>
            <FaGithub className="icon"/>
            <FaInstagram className="icon"/>
        </div>
    )
}

export default Footer;