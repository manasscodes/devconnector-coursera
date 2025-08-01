import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    user: { name },
    bio,
    skills,
  },
}) => {
  return (
    <div class="profile-about bg-light p-2">
     {
          bio && (
          <Fragment>
               <h2 class="text-primary">{name.trim().split(" ")[0]}'s Bio</h2>
               <p>{bio}</p>
               <div class="line"></div>
          </Fragment>
          )
     }
      <h2 class="text-primary">Skill Set</h2>
      <div class="skills">
        {
          skills.slice(0, 4).map((skill, index) => (
            <div key={index} class="p-1">
              <i className="fas fa-check" /> {skill}
            </div>
          ))
        }
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
