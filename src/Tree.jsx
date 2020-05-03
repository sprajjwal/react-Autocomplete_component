import React, { Component } from 'react';
import InnerTree, { addCount } from './utils/Tree';

class Tree extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.tree = new InnerTree(data);
    this.state = {
      word: '',
      items: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    const stateItems = this.state.items;
    const prefix = e.target.value;
    let items = [];
    if (prefix !== '') {
      if (stateItems.includes(prefix)) {
        addCount(prefix);
      } else {
        items = this.tree.complete(prefix);
        // eslint-disable-next-line react/no-unused-state
      }
    }
    this.setState({ items });
    this.setState({ word: prefix });
  }

  onClick(e) {
    console.log(e);
  }

  render() {
    const { items } = this.state;
    // const options =
    return (
      <div>
        <label>
          <input
            type="text"
            list="data"
            onChange={this.onChange}
          />
        </label>
        <datalist id="data">
          {items.map((item, key) => <option key={key} value={item} onClick={this.onClick}/>)}
        </datalist>
      </div>
    );
  }
}

export default Tree;
