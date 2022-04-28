/*
 * Create A Transpose Of A Directed Graph
 * Given a strongly connected directed graph, return its transpose. The graph will be given as a reference to one of
 * its nodes; the rest of the graph can be discovered by walking its edges.
 *
 * Example
 * Input: a node of a graph like this:
 *       1 --> 2
 *       ^    /
 *       |   /
 *       3 <
 *
 * Output: a node of a graph like this:
 *       3 --> 2
 *       ^    /
 *       |   /
 *       1 <
 *
 * Notes
 * Constraints:
 * 1 <= number of nodes <= 315
 * Node values are unique integers, and 1 <= node value <= number of nodes
 * No multiple edges (connecting any pair of nodes in one direction) or self loops (edges connecting a node with itself) in the input graph
 * Description of the text format of the test cases
 * You might need this for debugging your solution on IK UpLevel platform.
 * Input and output file each contain a list or directed edges representing a directed graph.
 *
 * The input example
 *       1 --> 2
 *       ^    /
 *       |   /
 *       3 <
 * is represented by
 * {
 * "edges": [
 * [1, 2],
 * [2, 3],
 * [3, 1]
 * ]
 * }
 * and the output
 *       3 --> 2
 *       ^    /
 *       |   /
 *       1 <
 * is represented by
 * [
 * [2, 1],
 * [3, 2],
 * [1, 3]
 * ]
 */

/*
 * 3 ways to solve
 * bfs
 * dfs
 * storing the reversed edges in another list and building a graph from it
 */

class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

// dfs implementation
const createTranspose = (node) => {
  const reversedGraph = {};
  const dfsClone = (source) => {
    const tmpNode = new GraphNode(source.value);
    reversedGraph[source.value] = tmpNode;
    for(const neighbor of source.neighbors) {
      if(!reversedGraph[neighbor.value]) {
        dfsClone(neighbor);
      }
      reversedGraph[source.value].neighbors.push(tmpNode);
    }
  };
  dfsClone(node);
  return reversedGraph[node.value];
};
// Time O(v + e)
// space O(v + e)


// bfs implementation
const createTranspose2 = (node) => {
  const adjList = {};
  const visited = new Set();

  const queue = [node];
  visited.add(node.value);

  while (queue.length > 0) {
    const currNode = queue.shift();
    if (!adjList.hasOwnProperty(currNode.value)) {
      adjList[currNode.value] = new GraphNode(currNode.value);
    }
    for (const neighbor of currNode.neighbors) {
      if (!adjList.hasOwnProperty(neighbor.value)) {
        adjList[neighbor.value] = new GraphNode(neighbor.value);
        adjList[neighbor.value].value = neighbor.value;
      }
      adjList[neighbor.value].neighbors.push(adjList[currNode.value]);
      if (!visited.has(neighbor.value)) {
        queue.push(neighbor);
        visited.add(neighbor.value);
      }
    }
  }

  return adjList[node.value];
};
