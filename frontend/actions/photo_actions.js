import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const receivePhotoErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchPhotos = () => dispatch => (
  APIUtil.fetchPhotos().then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const fetchPhoto = id => dispatch => (
  APIUtil.fetchPhoto(id).then(photo => (
    dispatch(receivePhoto(photo))
  ))
);

export const fetchUserPhotos = userId => dispatch => (
  APIUtil.fetchUserPhotos(userId).then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const fetchAlbumPhotos = albumId => dispatch => (
  APIUtil.fetchAlbumPhotos(albumId).then(photos => (
    dispatch(receivePhotos(photos))
  ))
);

export const createPhoto = formPhoto => dispatch => (
  APIUtil.createPhoto(formPhoto)
    .then(photo => dispatch(receivePhoto(photo)))
    .fail(err => dispatch(receivePhotoErrors(err.responseJSON))
  )
);

export const updatePhoto = (formPhoto, id) => dispatch => (
  APIUtil.updatePhoto(formPhoto, id)
    .then(photo => dispatch(receivePhoto(photo)))
    .fail(err => dispatch(receivePhotoErrors(err.responseJSON))
  )
);

export const deletePhoto = formPhoto => dispatch => (
  APIUtil.deletePhoto(formPhoto).then(photo => (dispatch(removePhoto(photo))))
);
