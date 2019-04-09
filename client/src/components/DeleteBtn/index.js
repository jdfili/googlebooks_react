import React from 'react'

function DeleteBtn(props){
    return(
        <button onClick={props.onClick} className="btn btn-danger mb-2"><i className="fas fa-trash-alt mr-2"></i>Delete</button>
    )
}

export default DeleteBtn;