import { merge } from 'lodash';
import { RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_ERRORS } from '../actions/photo_actions';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      const newPhoto = {[action.photo.id]: action.photo};
      return merge({}, state, newPhoto);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    case REMOVE_PHOTO:
      nextState = merge({}, state);
      delete nextState[action.photo.id];
      return nextState;
    default:
      return state;
  }
};

export default PhotosReducer;