import { merge } from 'lodash';
import { RECEIVE_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_ERRORS } from '../actions/photo_actions';

const defaultPhoto = Object.freeze({
  title: "",
  description: "",
  image_url: "",
  user_id: null,
  album_id: null
});

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      const newPhoto = {[action.photo.id]: action.photo};
      return merge(defaultPhoto, state, newPhoto);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge(defaultPhoto, { errors });
    case REMOVE_PHOTO:
      nextState = merge(defaultPhoto, state);
      delete nextState[action.photo.id];
      return nextState;
    default:
      return state;
  }
};

export default PhotosReducer;
