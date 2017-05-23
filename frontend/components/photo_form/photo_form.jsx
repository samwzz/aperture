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
      image_file: null
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
  }

  componentWillMount() {
    if (this.props.post !== undefined) {
      this.setState({
        title: this.props.post.title,
        description: this.props.post.description
      });
    }
  }

  render() {
    const formTitle = (this.props.postId === undefined) ? "Create New Post" : "Edit Post";

    return(
      <form className="post-form" onSubmit={this.handleSubmit}>
        <h3 className="form-title">{formTitle}</h3>
        <label>
          Title:
          <input className="input"
            value={this.state.title}
            onChange={this.update('title')}
          />
        </label>
        <label>
          Body:
          <input className="input"
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
