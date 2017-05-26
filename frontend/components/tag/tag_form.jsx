import React from 'react';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      taggable_id: this.props.photo.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTag(this.state);
  }

  render() {
    const { currentUser, photo } = this.props;
    return(
      <form className="tag-form-container" onSubmit={this.handleSubmit}>
        <input className="input"
          type="text"
          value={this.state.name}
          onChange={this.update('name')}
          />
        <button className="tag-button">Add Tag</button>
      </form>
    );
  }
}

export default TagForm;
