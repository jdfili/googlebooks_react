import React from 'react';

function Form(props) {
    return (
        <div className="form">
            <div className="form-group">
                <input type="text" name={props.name} value={props.value}  onChange = {props.onChange}></input>
            </div>
            <button onClick = {props.onClick} className="btn btn-success mt-2"><i className="fas fa-search mr-2"></i>Search</button>
        </div>
    )
};

export default Form; 