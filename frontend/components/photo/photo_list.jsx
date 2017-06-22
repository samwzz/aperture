import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import PhotoIndexItem from '../photo/photo_index_item';
import PhotoModal from '../modal/photo_modal';
import Modal from 'react-modal';
import InfiniteScroll from 'react-infinite-scroller';

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      numPhotos: null
    };
    this.loadMore = this.loadMore.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  hasMore() {
    return this.props.photos.length > 0;
  }

  loadMore(page) {
    const loaded = 5 * (page - 1);
    this.props.fetchPhotos(loaded)
      .then(()=> {
        const photos = this.state.photos;
        this.props.photos.reverse().forEach(photo => photos.push(photo));
      });
  }

  render () {
    const { photos } = this.state;
    const photoModals = photos.map((photo) => (
      <PhotoModal className="photo-modal" key={`${photo.id}-user`} photo={photo} />
    ));
    let noPhotos;
    if (this.state.numPhotos === 0) {
      noPhotos = "You will find your photos here. Now, go out and take some photos!";
    }
    const loader = <div className="loader">Loading ...</div>;

    return (
      <section className="photo-list-container">
        <div className="photo-list">
          <h2 className="no-photo-msg">{noPhotos}</h2>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadMore}
              hasMore={this.hasMore()}
              loader={loader}
            >
              {photoModals}
            </InfiniteScroll>
        </div>
      </section>
    );
  }
}

export default withRouter(PhotoList);
