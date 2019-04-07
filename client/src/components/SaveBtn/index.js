import React from 'react'

function SaveBtn(props){
    return(
        <button onClick={props.onClick} className="btn btn-success mb-2">Save</button>
    )
}

export default SaveBtn;