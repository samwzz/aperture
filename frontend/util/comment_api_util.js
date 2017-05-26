export const fetchPhotoComments = (photoId) => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}/comments`
  })
);

export const createComment = data => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data
  })
);

export const updateComment = (comment, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/comments/${id}`,
    data: comment
  })
);

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`,
  })
);
