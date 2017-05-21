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

export const receiveErrors = errors => ({
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

export const createPhoto = photo => dispatch => (
  APIUtil.createPhoto(photo).then(photo => (
    dispatch(receivePhoto(photo)),
    err => dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updatePhoto = photo => dispatch => (
  APIUtil.updatePhoto(photo).then(photo => (dispatch(receivePhoto(photo))))
);

export const deletePhoto = photo => dispatch => (
  APIUtil.deletePhoto(photo).then(photo => (dispatch(removePhoto(photo))))
);
