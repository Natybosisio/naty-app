import React from 'react';
import { Link} from "react-router-dom"

function Footer(){

return(
<>

    <div className="footer-redes">
        <h4 >Contactanos</h4>

    </div>

    <div>
        <Link>
        <img src="src/Images/icons/instagram.png" width="40" height="40" alt="logo-instagram"/>
        </Link>

        <Link>
        <img src="src/Images/icons/facebook.png" width="40" height="40" alt="logo-facebook"/>
        </Link>

        <Link>
        <img src="src/Images/icons/wp.png" width="40" height="40" alt="logo-watsapp"/>
        </Link>
    </div>
</>



)
}

export default Footer;