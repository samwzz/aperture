export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const fetchUserPhotos = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/photos`
  })
);

export const fetchAlbumPhotos = (albumId) => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}/photos`
  })
);

export const createPhoto = data => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    contentType: false,
    processData: false,
    data
  })
);

export const updatePhoto = (photo, id) => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `api/photos/${id}`,
      contentType: photo.id ? 'application/x-www-form-urlencoded; charset=UTF-8' : false,
      processData: photo.id ? true : false,
      data: photo.id ? { photo } : photo
    })
  );
};

export const deletePhoto = photo => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${photo.id}`,
  })
);
