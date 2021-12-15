import autorLogo from "../images/autor.png";
import bookLogo from "../images/book.png";
import urlLogo from "../images/url.png";


const Perfil = ({autor, tittle, url} : any) => {
    return (
        <>
            <span><img src= {autorLogo} className= "Logo" alt= "Logo"/>{autor}<br/></span>
            <span><img src= {bookLogo} className= "Logo" alt= "Logo"/>{tittle}<br/></span>
            <span><img src= {urlLogo} className= "Logo" alt= "Logo"/>{url}</span>
        </>
    )
}

export default Perfil;