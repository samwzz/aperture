import { merge } from 'lodash';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM, REMOVE_ALBUM, RECEIVE_ALBUM_ERRORS } from '../actions/album_actions';

const defaultAlbum = Object.freeze({
  0: {
    id: 0,
    title: "",
    description: "",
    user_id: null,
    photos: [],
    albumErrors: []
  }
});

const AlbumReducer = (state = defaultAlbum, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      const newAlbum = {[action.album.id]: action.album};
      return merge({}, state, newAlbum);
    case RECEIVE_ALBUM_ERRORS:
      const albumErrors = action.albumErrors;
      return merge({}, state, { albumErrors });
    case REMOVE_ALBUM:
      nextState = merge({}, state);
      delete nextState[action.album.id];
      return nextState;
    default:
      return state;
  }
};

export default AlbumReducer;
