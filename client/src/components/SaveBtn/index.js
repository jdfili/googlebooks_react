import React from 'react'

function SaveBtn(props){
    return(
        <button onClick={props.onClick} className="btn btn-success mb-4"><i className="fas fa-save mr-2"></i>Save</button>
    )
}

export default SaveBtn;