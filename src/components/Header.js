import image from "../images/image.jpg"

function Header(){
    return (
        <header>
            <img src={image} alt={image} />
        </header>
    )
}

export default Header;