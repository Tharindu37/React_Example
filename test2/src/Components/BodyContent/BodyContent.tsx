import React from 'react'
import './BodyContent.css'

function BodyContent(props){
    return(
        <div className="content">
            <h3>Main Content</h3>
            {props.children}
        </div>
    )
}

export default BodyContent