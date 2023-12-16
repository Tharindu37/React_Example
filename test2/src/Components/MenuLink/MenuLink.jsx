
import './MenuLink.css'

function MenuLink(props){
    return (
        <a href={props.url}>
            <h6>{props.linkname}</h6>
        </a>
    )
}

export default MenuLink