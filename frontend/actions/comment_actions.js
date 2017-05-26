import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveCommentErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchPhotoComments = userId => dispatch => (
  APIUtil.fetchPhotoComments(userId).then(comments => (
    dispatch(receiveComment(comments))
  ))
);

export const createComment = formComment => dispatch => (
  APIUtil.createComment(formComment)
    .then(comment => dispatch(receiveComment(comment)))
    .fail(err => dispatch(receiveCommentErrors(err.responseJSON))
  )
);

export const updateComment = (formComment, id) => dispatch => (
  APIUtil.updateComment(formComment, id)
    .then(comment => dispatch(receiveComment(comment)))
    .fail(err => dispatch(receiveCommentErrors(err.responseJSON))
  )
);

export const deleteComment = formComment => dispatch => (
  APIUtil.deleteComment(formComment).then(comment => (dispatch(removeComment(comment))))
);
