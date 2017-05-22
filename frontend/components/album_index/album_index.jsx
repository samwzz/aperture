import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import AlbumIndexItem from '../photo_index/album_index_item';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numAlbums: null
    };
  }

  componentDidMount() {
    this.props.fetchAlbums()
    .then(() => this.setState({
      numPhotos: this.props.photos.length
    }));
  }

  render () {
    let noAlbums;
    if (this.state.numAlbums === 0) {
      noAlbums = "You will find your albums here.";
    }

    const { albums } = this.props;
    const albumItems = albums.map((album) => (
      <AlbumIndexItem key={`${album.id}`} album={album} />
    ));

    return (
      <section className="album-index-container">
        <div id="album-index">
          {noAlbums}
          {albumItems}
        </div>
      </section>
    );
  }
}

export default withRouter(AlbumIndex);
