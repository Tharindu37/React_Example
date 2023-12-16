
import logo from '../../assets/react.svg'
import './HeaderContent.css'
import MenuLink from '../MenuLink/MenuLink'

function HeaderContent(){
    return(
        <div id="nav-content">
            <img src={logo} alt="" />
            <div>
               <MenuLink linkname="Home" url="#home"/>
               <MenuLink linkname="About" url="#about"/>
               <MenuLink linkname="Contact" url="#contact"/>
               <MenuLink linkname="Login" url="#login"/>
            </div>
        </div>
        
    )
}

export default HeaderContent