import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ERROR,
} from './types';

// Get posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });

    dispatch(setAlert('Error fetching posts', 'danger'));
  }
};
// Create a new post
export const createPost = formData => async dispatch => {
  try {
    const res = await axios.post('/api/posts', formData);

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });

    dispatch(setAlert('Post created successfully', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });

    dispatch(setAlert('Error creating post', 'danger'));
  }
};
// Delete a post
export const deletePost = postId => async dispatch => {
  try {
    await axios.delete(`/api/posts/${postId}`);

    dispatch({
      type: GET_POSTS,
      payload: postId,
    });

    dispatch(setAlert('Post deleted successfully', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });

    dispatch(setAlert('Error deleting post', 'danger'));
  }
};