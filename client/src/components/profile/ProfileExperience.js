import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, location, from, to, current, description },
}) => {
  return <div>
     <h3 className="text-dark">{company}</h3>
     <p>
          <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
          {to ? <Moment format="YYYY/MM/DD">{to}</Moment> : "Now"}
     </p>
     <p>
          <strong>Position: </strong> {title}
     </p>
     <p>
          <strong>Description:</strong>{ " "}{description ? description : "No description provided."}
     </p>
  </div>;
};

ProfileExperience.propTypes = {
     experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
