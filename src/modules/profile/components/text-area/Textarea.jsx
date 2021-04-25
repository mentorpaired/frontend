import React from 'react';
import "./textarea.styles.css"

const Textarea = ({ hideTextArea }) => {
    return (
        <div className="textarea-wrapper">
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className="btn-modal mr">Save</button>
            <button onClick={hideTextArea} className="btn-modal bg-red">Cancel</button>
        </div>
    );
}

export default Textarea;

