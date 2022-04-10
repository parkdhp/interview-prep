class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const preOrderDFS = (root, output) => {
  if (root === null) return;
  output.push(root.val);
  preOrderDFS(root.left, output);
  preOrderDFS(root.right, output);
  return output;
};

const inOrderDFS = (root, output) => {
  if (root === null) return;
  inOrderDFS(root.left, output);
  output.push(root.val);
  inOrderDFS(root.right, output);
  return output;
};

const postOrderDFS = (root, output) => {
  if (root === null) return;
  postOrderDFS(root.left, output);
  postOrderDFS(root.right, output);
  output.push(root.val);
  return output;
};

const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(7);
root.left.right.right = new Node(8);
root.right = new Node(3);
root.right.right = new Node(6);
root.right.right.left = new Node(9);
console.log(preOrderDFS(root, []));
console.log(inOrderDFS(root, []));
console.log(postOrderDFS(root, []));

// n-ary tree
class nAryNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

const nAryPreOrderDFS = (root, output) => {
  if (root===null)return;
  output.push(root.val);
  for(const child of root.children){
    nAryPreOrderDFS(child, output)
  }
  return output;
};

const nAryPostOrderDFS = (root, output) => {
  if (root===null)return;
  for(const child of root.children){
    nAryPostOrderDFS(child, output)
  }
  output.push(root.val);
  return output;
};

const nAryRoot = new nAryNode(10)
nAryRoot.children= [new nAryNode(3), new nAryNode(5), new nAryNode(8)];
console.log(nAryPreOrderDFS(nAryRoot, []));
console.log(nAryPostOrderDFS(nAryRoot, []));
