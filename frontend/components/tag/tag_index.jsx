import React from 'react';
import { withRouter } from 'react-router-dom';
import TagModal from '../modal/tag_modal';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhotoTags(parseInt(this.props.match.params.photoId));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTag();
    delete this.props;
  }

  render() {
    const { tags } = this.props;
    return(
      <div className="tag-index-container">
        <ul className="tag-index">
          {tags && tags.map((tag) => (
            <li key={`${tag.id}`} className="tag-item">
                <div>
                  {tag.name}
                </div>
            </li>
          ))}
          <TagModal photo={this.props.photo}/>
        </ul>
      </div>
    );
  }
}

export default withRouter(TagIndex);
