import React from 'react';
import { withRouter } from 'react-router-dom';
import TagModal from '../modal/tag_modal';
import TagIndexItem from './tag_index_item';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotoTags(parseInt(this.props.match.params.photoId));
  }

  render() {
    const { tags, photo, deleteTag, currentUser } = this.props;
    return(
      <div className="tag-index-container">
        <ul className="tag-index">
          {tags && tags.map((tag) => (
            <TagIndexItem key={tag.id}
                          tag={tag}
                          photo={photo}
                          deleteTag={deleteTag}
                          currentUser={currentUser}/>
          ))}
          <TagModal photo={this.props.photo}/>
        </ul>
      </div>
    );
  }
}

export default withRouter(TagIndex);
