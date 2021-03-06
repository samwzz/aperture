import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';
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

export const receiveAlbumErrors = albumErrors => ({
  type: RECEIVE_ALBUM_ERRORS,
  albumErrors
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

export const createAlbum = formAlbum => dispatch => (
  APIUtil.createAlbum(formAlbum)
    .then(album => dispatch(receiveAlbum(album)))
    .fail(err => dispatch(receiveAlbumErrors(err.responseJSON))
  )
);

export const updateAlbum = (formAlbum, id) => dispatch => (
  APIUtil.updateAlbum(formAlbum, id)
    .then(album => dispatch(receiveAlbum(album)))
    .fail(err => dispatch(receiveAlbumErrors(err.responseJSON))
  )
);

export const deleteAlbum = formAlbum => dispatch => (
  APIUtil.deleteAlbum(formAlbum).then(album => (dispatch(removeAlbum(album))))
);
