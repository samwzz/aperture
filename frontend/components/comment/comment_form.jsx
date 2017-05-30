import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      user_id: this.props.currentUser.id,
      photo_id: this.props.photoId,
      commentButton: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    if (this.props.formType === "new") {
      this.setState({
        commentButton: true
      });
    }
  }

  onBlur() {
    if (this.props.formType === "new") {
      this.setState({
        commentButton: false
      });
    }
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.formType === "new") {
      this.props.createComment(this.state)
      .then(() => this.setState({
        body: ""
      }))
      .then(() => this.setState({
        commentButton: false
      }));
   } else {
      this.props.updateComment(this.state, this.props.comment.id)
      .then(() => this.setState({
        body: ""
      }))
      .then(() => this.props.closeModal());
   }
 }

 componentDidMount() {
   this.setState({
     photo_id: parseInt(this.props.match.params.photoId)
   });
 }

  componentWillMount() {
    if (this.props.comment !== undefined) {
      this.setState({
        body: this.props.comment.body,
        commentButton: true
      });
    }
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.commentErrors && this.props.commentErrors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const buttonText = this.props.formType === "new" ? "Comment" : "Done";
    let commentButton;
    if (this.state.commentButton) {
      commentButton = <button className="comment-button">{buttonText}</button>;
    }
    return(
      <form className="comment-form-container" onSubmit={this.handleSubmit}>
        <div className="comment-form">
          {this.renderErrors()}
          <textarea className="textarea"
            type="text"
            placeholder="Add a comment"
            value={this.state.body}
            onChange={this.update('body')}
            onFocus={this.onFocus}
            />
        </div>
        {commentButton}
      </form>
    );
  }
}

export default withRouter(CommentForm);
