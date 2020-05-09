/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InnerTree, { addCount } from './utils/Tree';

class Tree extends Component {
  constructor(props) {
    super(props);
    const { data, name } = this.props;
    localStorage.setItem(name, JSON.stringify({}));
    this.tree = new InnerTree(name, data);
    this.state = {
      items: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { items } = this.state;
    const prefix = e.target.value;
    const { validator, getInput, name } = this.props;
    let newItems = [];
    if (prefix !== '' && validator(prefix)) { // check if prefix isn't empty and passes validator
      if (items.includes(prefix)) {
        addCount(prefix, name);
        getInput(prefix); // sends the selected prefix back to parent component
      } else {
        newItems = this.tree.complete(prefix);
      }
    }
    this.setState({ items: newItems });
  }


  render() {
    const { items } = this.state;
    // const options =
    return (
      <div>
        <input
          type="text"
          list="data"
          onChange={this.onChange}
        />
        <datalist id="data">
          {items.map((item, key) => <option key={key} value={item} onClick={this.onClick} />)}
        </datalist>
      </div>
    );
  }
}

export default Tree;
