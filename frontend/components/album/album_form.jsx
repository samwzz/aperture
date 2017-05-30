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
      user_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.formType === "new") {
      this.props.createAlbum(this.state)
        .then(data => this.props.history.push(`/users/${this.state.user_id}/albums`))
        .then(() => this.props.closeModal());
   } else {
      this.props.updateAlbum(this.state, this.props.album.id)
        .then(data => this.props.history.push(`/users/${this.state.user_id}/albums`))
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
        {this.props.albumErrors && this.props.albumErrors.map((error, i) => (
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
      <form className="upload-form-container" onSubmit={this.handleSubmit}>
        <div className="upload-form">
          <div className="upload-form-left">
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
