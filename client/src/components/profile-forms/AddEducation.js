import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import { useNavigate } from "react-router-dom";

const AddEduction = ({ addEducation }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const navigate = useNavigate();

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <h1 class="large text-primary">Add Your Education</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any school or bootcamp that you
        have attended
      </p>
      <small>* = required field</small>
      <form
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, navigate);
        }}
      >
        <div class="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="* Degree or Certification"
            name="degree"
            value={degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Field of Study"
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            name="fieldofstudy"
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{" "}
            Current Education
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddEduction.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEduction);
