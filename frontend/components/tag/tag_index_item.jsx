import React from 'react';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTag(this.props.tag);
    delete this.props;
  }

  deleteTag() {
    const { currentUser, photo } = this.props;
    console.log(currentUser);
    if (currentUser.id === photo.user_id) {
      return(
        <a className="delete-tag" onClick={ this.handleDelete }>
          <i className="fa fa-times"></i>
        </a>
      );
    }
  }

  render() {
    const { tag } = this.props;

    return(
      <li key={`${tag.id}`} className="tag-item">
          <div className="tag-item-wrapper">
            <div>{tag.name}</div>
            {this.deleteTag()}
          </div>
      </li>
    );
  }
}

export default TagIndexItem;
