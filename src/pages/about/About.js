import React, { Component } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class About extends Component {
  state = {
    name: "",
    avatar: "",
    bio: "",
  };

  if(token) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <div className="about_container">
        <div className="about_appname">MentorPaired</div>

        <div className="image_name_location_container">
          <div className="image">
            <FontAwesomeIcon icon={faCamera} size="2x" className="fa_camera" />
            <img src="#" alt="user_avatar" />
          </div>

          <div className="name_location">
            <p className="name">{this.state.name}</p>
            <div className="location">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="2x"
                className="fa_location_icon"
              />
              <p>Munich, Germany</p>
            </div>
          </div>
        </div>

        <div className="bio_container">
          <p className="name">About Name</p>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              nisl nunc, mollis in urna vel, tincidunt congue arcu. Pellentesque
              et felis mauris. Suspendisse non lectus viverra, hendrerit ex
              lobortis, suscipit mi. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Nulla vel
              aliquet lectus, sit amet efficitur dolor. Maecenas aliquet libero
              in massa convallis feugiat eu vitae neque. Maecenas nec lacus
              efficitur, eleifend erat ac, consectetur nisl. Aliquam nisl erat,
              ultricies nec enim nec, porta gravida felis. Nulla facilisi.
              Praesent blandit justo ex, sit amet ultricies ipsum auctor
              ultricies. Sed tristique tristique nibh in{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
