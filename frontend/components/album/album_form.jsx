import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import { Redirect } from 'react-router-dom';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: this.props.currentUser.id,
      photos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.formType === "upload") {
      this.props.createAlbum( this.state )
        .then(data => this.props.history.push(`/users/${this.state.user_id}/albums/${this.props.album.id}`))
        .then(() => this.props.closeModal());
   } else {
      this.props.updateAlbum(this.state)
        .then(data => this.props.history.push(`/users/${this.state.user_id}/albums/${this.props.album.id}`))
        .then(() => this.props.closeModal());
   }
 }

  componentWillMount() {
    if (this.props.album !== undefined) {
      this.setState({
        title: this.props.album.title,
        description: this.props.album.description
      });
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors && this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const formTitle = (this.props.formType === "new") ? "Create Album" : "Edit Album";

    return(
      <form className="album-form-container" onSubmit={this.handleSubmit}>
        <div className="album-form">
          <div className="album-form-left">
            <h3 className="form-title">{formTitle}</h3>
            {this.renderErrors()}
            <label>Title</label>
            <input className="input"
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              />

            <label>Description</label>
            <textarea className="textarea"
              type="text"
              placeholder="Tell us more about your album"
              value={this.state.description}
              onChange={this.update('description')}
              />
          </div>
          <div className="album-form-right">
            <label>Choose photos</label>
            
          </div>
        </div>
        <div className="album-submit">
          <button className="submit-button">Submit album</button>
        </div>
      </form>
    );
  }
}

export default withRouter(AlbumForm);
