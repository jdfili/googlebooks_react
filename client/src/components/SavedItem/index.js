import React from 'react'
import DeleteBtn from '../DeleteBtn';
function SavedItem(props){
    return (
        <div>
            <div className="container">
            <img src={props.imageLinks} />
            <h4>{props.title}</h4>
            <h5>{props.authors}</h5>
            <p>{props.description}</p>
            <DeleteBtn onClick={()=>props.onClick(props.id)}>Delete</DeleteBtn>
        </div>
        </div>
    )
}

export default SavedItem;