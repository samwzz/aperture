import * as APIUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const receiveTagErrors = errors => ({
  type: RECEIVE_TAG_ERRORS,
  errors
});

export const fetchPhotoTags = userId => dispatch => (
  APIUtil.fetchPhotoTags(userId).then(tags => (
    dispatch(receiveTags(tags))
  ))
);

export const createTag = formTag => dispatch => (
  APIUtil.createTag(formTag)
    .then(tag => dispatch(receiveTag(tag)))
    .fail(err => dispatch(receiveTagErrors(err.responseJSON))
  )
);

export const deleteTag = formTag => dispatch => (
  APIUtil.deleteTag(formTag).then(tag => (dispatch(removeTag(tag))))
);
