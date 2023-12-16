
import './MenuItem.css'
import { Link } from 'react-router-dom'

function MenuItem(props){
    return (
        // <a href={props.linkurl}>{props.linktext}</a>
        <Link to={props.linkurl}>{props.linktext}</Link>
    )
}

export default MenuItem