import React, { useContext, useState } from 'react';
import { StateContext } from '../../../../store';
import "./about-modal.styles.css"
import jwt_decode from "jwt-decode";
import { updateUserAboutInfo } from '../../../../actions/auth.actions';


const AboutMeModal = ({ hideModal, aboutme }) => {
    const { dispatch, state } = useContext(StateContext)
	const { user_id } = jwt_decode(localStorage.access_token)
    const [about, setAbout] = useState(aboutme)
    const handleChange = e => {
        setAbout(e.target.value)
    }
    const submit = () => {
        dispatch(updateUserAboutInfo(user_id, dispatch, { about, email: "nnamenearinze@gmail.com" }))
    }
    return ( 
    <div id="myModal" className="modal">
        <div className="modal-inner">
            <div onClick={hideModal} className="backdrop"></div>
            <div className="child">
                <div className="modal-content inc">
                    <div className="textarea-container">
                        <textarea disabled={state.loading} onChange={handleChange} value={about} name="" id="" cols="30" rows="10">About me</textarea>
                    </div>
                    <button disabled={state.loading} onClick={submit} className='btn-modal'>{state.loading ? "Loading...": "Save"}</button>
                    <button disabled={state.loading} onClick={hideModal} className='btn-modal bg-red ml'>Cancel</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutMeModal;