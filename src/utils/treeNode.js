class TreeNode {
  /**
  * Tree Node that will store data, whether the node is termina
  * and reference to the next node.abs
  */
  constructor(char=null) {
    this.data = char;
    this.children = {}; // children are maintained as object
    this.terminal = false;
  }

  isTerminal() {
    /** returns true if node is terminal */
    return this.terminal;
  }

  numChildren() {
    /** returns the number of children this node has */
    return Object.keys(this.root.children).length;
  }

  hasChild(ch) {
    /** returns true if the node has ch as a child  */
    // eslint-disable-next-line no-prototype-builtins
    return this.children.hasOwnProperty(ch);
  }

  getChild(ch) {
    /** returns the child node that has the given character
     * as data */
    if (this.children.hasChild(ch)) {
      return this.children[ch];
    }
    return null;
  }

  addChild(ch, node) {
    /** Adds the given character and node as key-value
     * in the children
     */
    if (!(this.hasChild(ch))) {
      this.children[ch] = node;
    } else { // ch is already a key
      throw ReferenceError;
    }
  }
}

export default TreeNode;
