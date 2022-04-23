/*
 * Graph Valid Tree
 * Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function
 * to check whether these edges make up a valid tree
 *
 * Example 1
 * Input:
 * n=5, and edges = [[0,1],[0,2],[0,3],[1,4]]
 * Output:
 * true
 *
 * Example 2
 * Input:
 * n=5, and edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
 * Output:
 * false
 */

// bfs implementation
const isValidTree = (n, edges) => {
  const adjList = new Array(n).fill(null).map(() => []);
  const visited = new Array(n).fill(false);
  const parent = [];
  let numComponents = 0;
  for (const [start, end] of edges) {
    adjList[start].push(end);
    adjList[end].push(start);
  }

  const bfs = (source) => {
    const q = [];
    q.push(source);
    visited[source] = true;
    while (q.length) {
      const v = q.shift();
      for (const node of adjList[v]) {
        if (!visited[node]) {
          visited[node] = true;
          parent[node] = v;
          q.push(node);
        } else{
          if(parent[v] !== node) {
            return true; // cross edge found
          }
        }
      }
    }
    return false; // no cycle has been found
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      numComponents++;
      if (numComponents > 1) {
        return false;
      }
      if (bfs(i)) {
        return false;
      }
    }
  }
  return true;
};

console.log(isValidTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]]));
console.log(isValidTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]));
console.log(isValidTree(6, [[4, 2], [1, 2], [4, 3], [4, 0], [1, 0]]));


// dfs implementation
const isValid = (node_count, edge_start, edge_end) => {
  const adjList = new Array(node_count).fill(null).map(() => []);
  const visited = new Array(node_count).fill(false);
  const parent = [];
  let count = 0;
  for (let i = 0; i < edge_start.length; i++) {
    adjList[edge_start[i]].push(edge_end[i]);
    adjList[edge_end[i]].push(edge_start[i]);
  }

  const dfs = (source) => {
    visited[source] = true;
    for (const node of adjList[source]) {
      if (!visited[node]) {
        parent[node] = source;
        if (dfs(node)) {
          return true;
        }
      } else {
        if (parent[source] !== node) {
          return true; // back edge found
        }
      }
    }
    return false; // no cycle has been found
  };

  for (let i = 0; i < node_count; i++) {
    if (!visited[i]) {
      count++;
      if (count > 1) {
        return false;
      }
      if (dfs(i)) {
        return false;
      }
    }
  }
  return true;
};

console.log(isValid(4,[0,0,0],[1,2,3]));
console.log(isValid(6,[4,1,4,4,1],[2,2,3,0,0]));
