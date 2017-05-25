import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});

export const receiveAlbumErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchAlbum = id => dispatch => (
  APIUtil.fetchAlbum(id).then(album => (
    dispatch(receiveAlbum(album))
  ))
);

export const fetchUserAlbums = userId => dispatch => (
  APIUtil.fetchUserAlbums(userId).then(albums => (
    dispatch(receiveAlbums(albums))
  ))
);

export const createAlbum = album => dispatch => (
  APIUtil.createAlbum(album).then(album => (
    dispatch(receiveAlbum(album)),
    err => dispatch(receiveAlbumErrors(err.responseJSON))
  ))
);

export const updateAlbum = album => dispatch => (
  APIUtil.updateAlbum(album).then(album => (
    dispatch(receiveAlbum(album)),
    err => dispatch(receiveAlbumErrors(err.responseJSON))
  ))
);

export const deleteAlbum = album => dispatch => (
  APIUtil.deleteAlbum(album).then(album => (dispatch(removeAlbum(album))))
);
