import React from 'react';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTag(this.state);
  }

  componentWillMount() {
    if (this.props.tag !== undefined) {
      this.setState({
        body: this.props.tag.name
      });
    }
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
      </form>
    );
  }
}

export default TagForm;
