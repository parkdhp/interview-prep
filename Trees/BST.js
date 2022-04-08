class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const search = (root, k) => {
  let curr = root;
  while (curr !== null) {
    if (k === curr.val) {
      return curr;
    } else if (k < curr.val) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
  return null;
};

const insert = (root, k) => {
  const newNode = new TreeNode(k);
  if (root === null) return newNode;
  let curr = root;
  let prev = null;
  while (curr !== null) {
    if (k === curr.val) {
      throw "already exists";
    } else if (k < curr.val) {
      prev = curr;
      curr = curr.left;
    } else {
      prev = curr;
      curr = curr.right;
    }
  }
  if (k < prev.val) {
    prev.left = newNode;
  } else {
    prev.right = newNode;
  }
  return root;
};

const findMin = (root) => {
  if (root === null) return null;
  let curr = root;
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr;
};

const findMax = (root) => {
  if (root === null) return null;
  let curr = root;
  while (curr.right !== null) {
    curr = curr.right;
  }
  return curr;
};

const findSuccessor = (root, node) => {
  if (root === null) return null;
  if (node.right !== null) {
    let curr = node.right;
    while (curr.left !== null) {
      curr = curr.left;
    }
    return curr;
  }
  // search for node, starting from root
  let ancestor = null;
  let curr = root;
  while (curr.val !== node.val) {
    if (node.val < curr.val) {
      ancestor = curr;
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }
  return ancestor;
};

const findPredecessor = (root, node) => {
  if (root === null) return null;
  if (node.left !== null) {
    let curr = node.left;
    while (curr.right !== null) {
      curr = curr.right;
    }
    return curr;
  }
  // search for node, starting from root
  let ancestor = null;
  let curr = root;
  while (curr.val !== node.val) {
    if (node.val > curr.val) {
      ancestor = curr;
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  return ancestor;
};

const deleteNode = (root, k) => {
  let curr = root;
  let prev = null;
  while (curr !== null) {
    if (k === curr.val) {
      break;
    } else if (k < curr.val) {
      prev = curr;
      curr = curr.left;
    } else {
      prev = curr;
      curr = curr.right;
    }
    if (curr === null) {
      return root;
    }
  }

  // node is a leaf
  if (curr.left === null && curr.right === null) {
    if (prev === null) return null;
    if (curr === prev.left) {
      prev.left = null;
    }
    if (curr === prev.right) {
      prev.right = null;
    }
  }

  // node has one child
  let child = null;
  if (curr.left === null && curr.right !== null) {
    child = curr.right;
  }
  if (curr.left !== null && curr.right === null) {
    child = curr.left;
  }
  if (child !== null) {
    if (prev === null) {
      root = child;
      return root;
    }
    if (curr === prev.left) {
      prev.left = child;
    } else {
      prev.right = child;
    }
  }

  // node has two children
  if (curr.left !== null && curr.right !== null) {
    let successor = curr.right;
    prev = curr;
    while (successor.left !== null) {
      prev = successor;
      successor = successor.left;
    }
    curr.val = successor.val;
    if (successor.val === prev.left.val) {
      prev.left = successor.left;
    } else {
      prev.right = successor.right;
    }
  }
  return root;
};
