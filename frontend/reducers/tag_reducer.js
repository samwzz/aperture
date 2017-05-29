import { merge } from 'lodash';
import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG, RECEIVE_TAG_ERRORS } from '../actions/tag_actions';

const defaultTag = Object.freeze({
  0: {
    id: 0,
    name: "",
    photo_id: null,
    errors: []
  }
});

const TagReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      const newTag = {[action.tag.id]: action.tag};
      return merge({}, state, newTag);
    case RECEIVE_TAG_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    case REMOVE_TAG:
      nextState = merge({}, state);
      delete nextState[action.tag.id];
      return nextState;
    default:
      return state;
  }
};

export default TagReducer;
