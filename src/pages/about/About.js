import React, { Component } from "react";
import "./About.css";
import { connect } from "react-redux";
import { loadUser } from "../../actions/aboutAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class About extends Component {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <>
        {this.props.user.map((u) => {
          <div className="about_container">
            <div className="about_appname">MentorPaired</div>

            <div className="image_name_location_container">
              <div className="image">
                <FontAwesomeIcon
                  icon={faCamera}
                  size="2x"
                  className="fa_camera"
                />
                <img src="#" alt="user_avatar" />
              </div>

              <div className="name_location">
                <p className="name">{u.display_name}</p>
                <div className="location">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="2x"
                    className="fa_location_icon"
                  />
                  <p>{u.timezone}</p>
                </div>
              </div>
            </div>

            <div className="bio_container">
              <p className="name">About {u.display_name}</p>
              <div className="description">
                <p>{u.about}</p>
              </div>
            </div>
          </div>;
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.aboutReducer.user,
});

export default connect(mapStateToProps, { loadUser })(About);
