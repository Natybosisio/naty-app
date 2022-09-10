import React from 'react';
import { Link} from "react-router-dom"
import instagram from "./Images/icons/instagram.png"
import facebook from "./Images/icons/facebook.png"
import wp from "./Images/icons/wp.png"
function Footer(){

return(
<>

    <div>
        <h4 >Contactanos</h4>

    </div>
                    {/* NO SE COMO HACER UN LINK EXTERNO  */}
    <div>
        <Link to="/"> 
        <img src={instagram} width="40" height="40" alt="logo-instagram"/>
        </Link>

        <Link to="/">
        <img src={facebook} width="40" height="40" alt="logo-facebook"/>
        </Link>

        <Link to="/">
        <img src={wp} width="40" height="40" alt="logo-watsapp"/>
        </Link>
    </div>
</>



)
}

export default Footer;