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
    $('#album-tab').addClass('active');
    // set numAlbums after fetching user albums
    this.props.fetchUserAlbums(this.props.currentUser.id)
    .then(() => this.setState({
      numAlbums: this.props.albums.length
    }));
  }

  componentWillUnmount() {
    $('#album-tab').removeClass('active');
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
          <AlbumModal receiveAlbumErrors={this.props.receiveAlbumErrors}
            currentUser={this.props.currentUser}
            formType="new" />
          {noAlbums}
          {albumItems}
        </div>
      </section>
    );
  }
}

export default withRouter(AlbumIndex);
