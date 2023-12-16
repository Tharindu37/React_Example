import './HeaderContent.css'
import logo from '../../assets/react.svg'
import Links from '../Links/Links'

function HeaderContent(){
    return (
        <div className="main-wrap">
            <img src={logo} alt="" />
            <div className="link-wrap">
                <Links/>
            </div>
        </div>
    )
}

export default HeaderContent