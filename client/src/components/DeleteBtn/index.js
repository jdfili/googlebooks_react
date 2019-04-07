import React from 'react'

function DeleteBtn(props){
    return(
        <button onClick={props.onClick} className="btn btn-danger mb-2">Delete</button>
    )
}

export default DeleteBtn;