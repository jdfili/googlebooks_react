import React from 'react';
import SaveBtn from '../SaveBtn';
import "./style.css";

function BookItem(props) {
    return (
        <div className="container">
            <img src={props.imageLinks} className="mr-4" /> <h4>{props.title}</h4>
            <h5>{props.authors}</h5>
            <h6>{props.categories}</h6> <hr />
            <p>{props.description}</p>
            <div className="text-center">
                <SaveBtn onClick={() => props.onClick(props.id)}>Save</SaveBtn>
            </div>
        </div >
    )
};

export default BookItem;