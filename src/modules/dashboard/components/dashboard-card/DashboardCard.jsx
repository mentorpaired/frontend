import React from 'react'
import "./dashboard.styles.css"

const DashboardCard = () => {
    return (
        <div className="card-container">
            <div className="card-header">
                <div className="left-header">
                    <h3><span className="bold">Java Script</span> - 3 years experience</h3>
                </div>
                <div className="right-header">
                    <p>3:40PM</p>
                </div>
            </div>
            <div className="card-content">
                <div className="card-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod tincidunt lectus consectetur auctor elit. Facilisis aliquam amet urna viverra tempor, eu, tellus, metus.</p>
                </div>
                <div className="card-btn">
                    <button className="action-btn decline">Decline</button>
                    <button className="action-btn accept">Accept</button>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard;