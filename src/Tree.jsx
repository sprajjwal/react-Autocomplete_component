/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import InnerTree, { addCount } from './utils/Tree';

const styles = {
  containter: {
    width: '90%',
    height: '90%',
    borderRadius: '5px',
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: '40%',
    fontSize: '135%',
    backgroundColor: 'pink',
    borderRadius: '5px',
  },
  anchor: {
    paddingRight: '20%',
    fontSize: '60%',
    alignSelf: 'flex-end',
    textDecoration: 'none',
    padding: '0',
    marginTop: '1%',
    textAlign: 'center',
    width: '40%',
    fontColor: 'red',
  },
};

class Tree extends Component {
  constructor(props) {
    super(props);
    const { data, name } = this.props;
    if (localStorage.getItem(name) == null) {
      /* setup component storage if it doesn't exist */
      localStorage.setItem(name, JSON.stringify({}));
    }
    this.tree = new InnerTree(name, data);
    this.state = {
      word: '',
      items: [],
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { items, word } = this.state;
    const prefix = e.target.value;
    const { validator, getInput, name } = this.props;
    let newItems = [];
    if (!validator(prefix)) {
      return;
    }
    if (prefix !== '') { // check if prefix isn't empty and passes validator
      if (items.includes(prefix)) {
        addCount(prefix, name);
        getInput(prefix); // sends the selected prefix back to parent component
      } else {
        newItems = this.tree.complete(prefix);
      }
    }
    this.setState({ items: newItems, word: prefix });
  }


  render() {
    const { items, word } = this.state;
    const { name } = this.props;
    // const options =
    return (
      <div style={styles.containter}>
        <input
          type="text"
          list="data"
          onChange={this.onChange}
          value={word}
          style={styles.input}
        />
        <datalist id="data">
          {items.map((item, key) => <option key={key} value={item} onClick={this.onClick} />)}
        </datalist>
        <a
          style={styles.anchor}
          onClick={() => localStorage.setItem(name, JSON.stringify({}))}
          href="#"
        >
          clear my data
        </a>
      </div>
    );
  }
}

export default Tree;
