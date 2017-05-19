import { values } from 'lodash';

export const selectPhotos = ({ photos }) => (
  values(photos)
);

export const selectPhoto = ({ photos }, id) => {
  const photo = photos[id] || {};
  return photo;
};
