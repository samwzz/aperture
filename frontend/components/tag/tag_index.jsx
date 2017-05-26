import React from 'react';

const TagIndex = ({ photo }) => (
  <div className="tag-index-container">
    <ul className="tag-index">
      {photo.tags && photo.tags.map((tag) => (
        <li key={`${tag.id}`} className="tag-item">
          {tag.name}
        </li>
      ))}

    </ul>
  </div>
);

export default TagIndex;
