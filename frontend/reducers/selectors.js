import { values } from 'lodash';

export const selectPhotos = ({ photos }) => (
  values(photos)
);

export const selectPhoto = ({ photos }, id) => {
  const photo = photos[id] || {};
  return photo;
};

export const selectAlbums = ({ albums }) => (
  values(albums)
);

export const selectAlbum = ({ albums }, id) => {
  const album = albums[id] || {};
  return album;
};

export const selectComments = ({ comments }) => (
  values(comments)
);

export const selectTags = ({ tags }) => (
  values(tags)
);
