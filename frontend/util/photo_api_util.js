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

export const createPhoto = data => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: photo
  })
);

export const deletePhoto = photo => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${photo.id}`,
  })
);
