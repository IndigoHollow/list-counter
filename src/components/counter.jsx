import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  styles = {
    fontWeight: 'bold',
    fontSize: '15px'
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increase</button>
        <div>List of tags:</div>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  handleIncrement = () =>  {
    this.setState({ count: this.state.count + 1 });
  }

  renderTags() {
    if (!this.state.tags.length) return <p>There are no items</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Counter;