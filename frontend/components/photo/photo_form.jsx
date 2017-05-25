import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import { Redirect } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image_url: "http://res.cloudinary.com/db1ywnpgj/image/upload/v1495218853/aperture_logo_white.png",
      image_file: null,
      user_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  updateFile() {
    return e => {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.onloadend = function () {
        this.setState({ image_file: file, image_url: reader.result });
      }.bind(this);

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ image_file: null, image_url: "" });
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo[title]", this.state.title);
    formData.append("photo[description]", this.state.description);
    formData.append("photo[image]", this.state.image_file);
    formData.append("photo[user_id]", this.state.user_id);

    if (this.props.formType === "upload") {
      this.props.createPhoto( formData, this.goBack)
        .then(data => this.props.history.push(`/photos/${this.props.photo.id}`))
        .then(() => this.props.closeModal());
   } else {
      this.props.updatePhoto({ formData, id: this.props.photo.id }, this.goBack)
        .then(data => this.props.history.push("/"))
        .then(() => this.props.closeModal());
   }
 }

  componentWillMount() {
    if (this.props.photo !== undefined) {
      this.setState({
        title: this.props.photo.title,
        description: this.props.photo.description
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
    const formTitle = (this.props.formType === "upload") ? "Upload Photo" : "Edit Photo";

    return(
      <form className="photo-form-container" onSubmit={this.handleSubmit}>
        <div className="photo-form">
          <div className="photo-form-left">
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
              placeholder="Tell us more about your photo"
              value={this.state.description}
              onChange={this.update('description')}
              cols="40" rows="5"
              />
          </div>
          <div className="photo-form-right">
            <input
              type="file"
              onChange={this.updateFile()}
              />
            <img className="image-preview" src={this.state.image_url} />
          </div>
        </div>
        <div className="upload-submit">
          <button className="submit-button">Submit photo</button>
        </div>
      </form>
    );
  }
}

export default withRouter(PhotoForm);
