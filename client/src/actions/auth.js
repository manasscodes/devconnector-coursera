import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if(localStorage.token){
     setAuthToken(localStorage.token);
  }

  try {
     const res = await axios.get("/api/auth");
     dispatch({
       type: USER_LOADED,
       payload: res.data,
     });
  } catch (error) {
     dispatch({
       type: AUTH_ERROR,
     });
  }
};


// Register User
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post("/api/users", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
          setAuthToken(res.data.token);
          dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

  // Login User
  export const login =
  (email, password) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({email, password});
    try {
      const res = await axios.post("/api/auth", body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
     setAuthToken(res.data.token);
     dispatch(loadUser()); // Load user after successful login
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  
}