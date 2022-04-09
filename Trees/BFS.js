class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Level Order Traversal or Breadth first search

const bfs = (root) => {
  const output = [];
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const node = queue.shift();
    output.push(node);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return output;
};

const root = new Node(5);
root.left = new Node(3);
root.right = new Node(6);
console.log(bfs(root));
