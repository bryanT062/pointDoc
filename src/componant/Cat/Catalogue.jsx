import './Catalogue.css'
import Logo from '../../assets/logo.png'

export default function Catalogue(){
    return(
        <aside>
            <img id="logo" src={Logo} alt=""/>
            <hr />
            <h5>Language / Code</h5>
            <div id="Catalogue">
                
                
                <button>HTML</button>
                <button>CSS</button>
                <button>REACT</button>
                <button>JS</button>
                <button>GIT</button>
            </div>
           
        </aside>

    )

}