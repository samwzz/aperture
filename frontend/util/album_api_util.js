export const fetchAlbum = id => (
  $.ajax({
    method: 'GET',
    url: `api/albums/${id}`
  })
);

export const fetchUserAlbums = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/albums`
  })
);

export const createAlbum = data => (
  $.ajax({
    method: 'POST',
    url: 'api/albums',
    data
  })
);

export const updateAlbum = album => (
  $.ajax({
    method: 'PATCH',
    url: `api/albums/${album.id}`,
    data: album
  })
);

export const deleteAlbum = album => (
  $.ajax({
    method: 'DELETE',
    url: `api/albums/${album.id}`,
  })
);
