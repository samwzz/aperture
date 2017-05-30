import React from 'react';
import PhotoIndexContainer from '../photo/photo_index_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return(
      <PhotoIndexContainer />
    );
  }
}

export default Discover;
