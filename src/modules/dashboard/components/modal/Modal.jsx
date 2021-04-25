import React from 'react';
import "./modal.styles.css"


const Modal = ({ hideModal }) => {
    return (
    <div id="myModal" className="modal">
        <div className="modal-inner">
            <div className="backdrop" onClick={hideModal}/>
                <div className="child">
                    <div className="modal-content">
                        <span onClick={hideModal} className="close">&times;</span>
                        <div className="flex">
                            <svg className="p" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.953 2C6.465 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.493 2 11.953 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.567 4 11.953 4C16.391 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="#EB5757"/>
                                <path d="M11 7H13V14H11V7ZM11 15H13V17H11V15Z" fill="#EB5757"/>
                            </svg>
                            <p>You just declined <b>Iyke Anyanwu</b>'s request</p>
                        </div>
                        <button className='btn-modal'>Request a mentor</button>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Modal;
