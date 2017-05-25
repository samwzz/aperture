import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoIndexContainer from '../photo/photo_index_container';

class AlbumShow extends React.Component {
  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render() {
    const photos = this.props.album.photos;

    return(
       <PhotoIndexContainer photos={photos} />
    );
  }
}

export default withRouter(AlbumShow);
