/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import InnerTreeNode from './treeNode';

function getCount(prefix) {
  /** Returns the count of current node.
   */
  const mem = localStorage.getItem(prefix) !== null ? Number(localStorage.getItem(prefix)) : 0
  return mem;
}

function traverse(node, prefix, arr) {
  /** Traverse this prefix tree with recursive depth-first traversal.
   *   Start at the given node with the given prefix representing its path in
   *   this prefix tree and visit each node with the given visit function.
  */
  prefix += node.data;
  if (node.terminal) {
    arr[prefix] = getCount(prefix);
  }
  // eslint-disable-next-line guard-for-in
  for (const child in node.children) {
    traverse(node.children[child], prefix, arr);
  }
}

function addCount(prefix) {
  /** Increments the count of current node in local storage.
   */
  const mem = localStorage.getItem(prefix);
  if (mem === null) {
    localStorage.setItem(prefix, 1);
  } else {
    localStorage.setItem(prefix, Number(mem) + 1);
  }
  console.log('count: ', prefix, ' ', localStorage.getItem(prefix));
}

class InnerTree {
  constructor(items = null) {
    this.root = new InnerTreeNode(); // initialize the tree's root
    this.size = 0; // Size maintained as attribute
    if (items != null) {
      for (let i = 0; i < items.length; i += 1) {
        this.insert(items[i]);
      }
    }
  }

  isEmpty() {
    /** returns true if the tree is empty, false othewise */
    return this.size !== 0;
  }

  contains(string) {
    /** returns true if the tree contains given string */
    let curr = this.root;
    for (let i = 0; i < string.length; i += 1) {
      if (!(curr.hasChild(string[i]))) {
        return false;
      }
      curr = curr.getChild(string[i]);
    }
    return true;
  }

  insert(string) {
    let curr = this.root;
    for (let i = 0; i < string.length; i += 1) {
      if (!(curr.hasChild(string[i]))) {
        const newNode = new InnerTreeNode(string[i]); // make the node
        curr.addChild(string[i], newNode); // add the node
      }
      curr = curr.getChild(string[i]); // get to the right child
    }
    if (!(curr.isTerminal())) {
      this.size += 1;
      curr.terminal = true;
    }
  }

  findNode(string) {
    /** returns a pair containing the deepest node in the
     * tree that matches the longest prefix
     */
    if (string.length === 0) {
      return (this.root, 0);
    }

    let curr = this.root;
    let i = 0;
    for (i; i < string.length; i += 1) {
      if (curr.hasChild(string[i])) {
        curr = curr.getChild(string[i]);
      } else {
        return [null, 0];
      }
    }
    return [curr, i + 1];
  }

  complete(prefix) {
    /** return a list of all strings stored in the tree
     * that starts with the given prefix
     */
    const completions = {};
    const starterNode = this.findNode(prefix);
    const curr = starterNode[0];
    const i = starterNode[1];

    if (curr === null) {
      return Object.keys(completions).slice(0,5);
    }
    if (curr.terminal === true) {
      completions[prefix.slice(0, i)] = getCount(prefix.slice(0, i));
    }
    for (const key in curr.children) {
      traverse(curr.getChild(key), prefix.slice(0, i), completions);
    }
    const items = Object.keys(completions).sort(function(a, b){return completions[a] - completions[b]});
    return items.reverse().slice(0, 5);
  }
}

export default InnerTree;
export { addCount };
