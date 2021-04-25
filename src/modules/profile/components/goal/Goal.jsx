import React from 'react';
import editIcon from "../../../../assets/svg/edit-btn.svg"
import Textarea from '../text-area/Textarea';


const Goal = ({ goal }) => {
    const [toggleTextArea, setToggleTextArea] = React.useState(false)
    const hideTextArea = () => {
        setToggleTextArea(false)
    }
    return (
        <div key={goal.title.toLowerCase().replace(" ", "-")} className="user-description--goal">
            { toggleTextArea ? (
                <Textarea hideTextArea={hideTextArea}/>
            ) : (
                <React.Fragment>
                    <div className="user-description--goal-text">
                        <p className="user-description--subtitle">{goal.title}</p>
                        <p className="user-description--paragraph">{goal.description}</p>
                    </div>
                    <button onClick={() => setToggleTextArea(true)} className="user-description--goal-edit-btn">
                        <img
                            src={editIcon}
                            className={"user-description--goal-edit-btn--icon"}
                            alt=""
                        />
                    </button>
                </React.Fragment>
            )}
        </div>
    );
}

export default Goal;