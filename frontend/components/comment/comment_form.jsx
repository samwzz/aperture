import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      photo_id: this.props.photoId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.createComment(this.state);
 }

  componentWillMount() {
    if (this.props.comment !== undefined) {
      this.setState({
        title: this.props.comment.body
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
    return(
      <form className="comment-form-container" onSubmit={this.handleSubmit}>
        <div className="comment-form">
          <div className="comment-form-left">
            <textarea className="textarea"
              type="text"
              placeholder="Add a comment"
              value={this.state.body}
              onChange={this.update('body')}
              />
          </div>
          <div className="comment-form-right">

          </div>
        </div>
        <div className="comment-submit">
          <button className="submit-button">Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentForm;
