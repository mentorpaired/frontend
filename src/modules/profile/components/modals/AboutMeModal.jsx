import React from 'react';
import "./about-modal.styles.css"

const AboutMeModal = ({ hideModal }) => {
    return ( 
    <div id="myModal" onClick={hideModal} className="modal">
            <span onClick={hideModal} className="close">&times;</span>
        <div className="modal-content inc">
            <div className="textarea-container">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className='btn-modal'>Save</button>
        </div>
    </div>
    );
}

export default AboutMeModal;