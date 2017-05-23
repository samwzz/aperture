import { merge } from 'lodash';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM, RECEIVE_ERRORS } from '../actions/album_actions';

const defaultAlbum = Object.freeze({
  title: "",
  description: "",
  user_id: null,
});

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      const newAlbum = {[action.album.id]: action.album};
      return merge({}, state, newAlbum);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, { errors });
    case REMOVE_ALBUM:
      nextState = merge({}, state);
      delete nextState[action.album.id];
      return nextState;
    default:
      return state;
  }
};

export default PhotosReducer;
