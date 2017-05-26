import { merge } from 'lodash';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_ERRORS } from '../actions/comment_actions';

const defaultComment = Object.freeze({
  0: {
    id: 0,
    body: "",
    user_id: null,
    photo_id: null
  }
});

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const newComment = {[action.comment.id]: action.comment};
      return merge({}, state, newComment);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    default:
      return state;
  }
};

export default CommentReducer;
