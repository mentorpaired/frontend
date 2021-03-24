import React from 'react'
import "./404Page.css"
import NotFoundImg from "../../assets/image/404.png"



const NotFoundPage = () => {
    return (
        <div className="notfound-container">
            <h1>The page you are looking for is not available.</h1>
            <div className="notfound-img">
                <img src={NotFoundImg} alt="mentorpaired 404 image"/>
            </div>
        </div>
    );
}

export default NotFoundPage;