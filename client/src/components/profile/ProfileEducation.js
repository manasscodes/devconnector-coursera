import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, current, description },
}) => {
  return <div>
     <h3 className="text-dark">{school}</h3>
     <p>
          <Moment format="YYYY/MM/DD">{from}</Moment> -{" "}
          {to ? <Moment format="YYYY/MM/DD">{to}</Moment> : "Now"}
     </p>
     <p>
          <strong>Degree: </strong> {degree}
     </p>
     <p>
          <strong>Field of Study: </strong> {fieldofstudy}
     </p>
     <p>
          <strong>Description:</strong>{ " "}{description ? description : "No description provided."}
     </p>
  </div>;
};

ProfileEducation.propTypes = {
     education: PropTypes.array.isRequired,
};

export default ProfileEducation;
