import React from 'react';
import {withRouter, Route } from 'react-router-dom';
import AlbumIndexItem from '../album/album_index_item';
import AlbumModal from '../modal/album_modal';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numAlbums: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // set numAlbums after fetching user albums
    this.props.fetchUserAlbums(this.props.currentUser.id);
  }

  render () {
    let noAlbums;
    if (this.props.albums && this.props.albums.length === 0) {
      noAlbums = "You will find your albums here.";
    }

    const { albums, currentUser } = this.props;
    const albumItems = albums.map((album) => (
      <AlbumIndexItem key={`${album.id}`} album={album} currentUser={currentUser} />
    ));

    return (
      <section className="album-index-container">
        <div className="album-index">
          {noAlbums}
          {albumItems}
          <div className="album-item-container">
            <div className="back-layer"></div>
            <div className="mid-layer"></div>
            <div className="album-item">
              <AlbumModal receiveAlbumErrors={this.props.receiveAlbumErrors}
                currentUser={this.props.currentUser}
                formType="new" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(AlbumIndex);
