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
      image_url: "",
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
    const formTitle = (this.props.photoId === undefined) ? "Create New Photo" : "Edit Photo";

    return(
      <form className="photo-form" onSubmit={this.handleSubmit}>
        <h3 className="form-title">{formTitle}</h3>
        {this.renderErrors()}
        <label>
          Title:
          <input className="input"
            value={this.state.title}
            onChange={this.update('title')}
          />
        </label>
        <label>
          Description:
          <textarea className="input"
           value={this.state.description}
           onChange={this.update('description')}
           />
        </label>
        <label>
          Image:
          <input
            type="file"
            onChange={this.updateFile()}
            />
        </label>
        <img src={this.state.image_url} />;
        <button className="submit-button">Submit</button>
      </form>
    );
  }
}

export default withRouter(PhotoForm);
