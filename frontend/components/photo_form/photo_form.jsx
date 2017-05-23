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
      image_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props;
    const post = merge({}, this.props.post, this.state);
    this.props.processForm({ post, id: postId }).then(
      () => this.setState({
        title: "",
        description: ""
      })
    );
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
      <form className="post-form" onSubmit={ this.handleSubmit }>
        <h3 className="form-title">{ formTitle }</h3>
        <label>
          Title:
          <input className="input"
            value={ this.state.title }
            onChange={ this.update('title') }
          />
        </label>
        <label>
          Body:
          <input className="input"
           value={ this.state.description }
           onChange={ this.update('description') }
           />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    );
  }
}

export default withRouter(PhotoForm);
