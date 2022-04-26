/*
 * Number of Connected Components in an Undirected Graph
 *
 * Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function
 * to find the number of connected components in an unidrected graph.
 *
 * Example 1
 * Input:
 * n = 5 and edges = [[0,1],[1,2],[3,4]]
 * 0           3
 * |           |
 * 1 --- 2     4
 * Output:
 * 2
 *
 * Example 2
 * Input:
 * n = 5 and edges = [[0,1],[1,2],[2,3],[3,4]]
 * 0           4
 * |           |
 * 1 --- 2 --- 3
 * Output:
 * 1
 */


// bfs implementation
const getConnectedComponentCount = (n, edges) => {
  const adjList = new Array(n).fill(null).map(() => []);
  const visited = new Array(n).fill(false);
  let count = 0;

  for (const [src, dest] of edges) {
    adjList[src].push(dest);
    adjList[dest].push(src);
  }

  const bfs = (source) => {
    const q = [];
    q.push(source);
    visited[source] = true;
    while (q.length) {
      const v = q.shift();
      for (const n of adjList[v]) {
        if (!visited[n]) {
          visited[n] = true;
          q.push(n);
        }
      }
    }
  };
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      bfs(i);
    }
  }
  return count;
};

// dfs implementation
const getNumberOfConnectedComponents = (n, edges) => {
  let connectedCount = 0;
  const adjList = new Array(n).fill(null).map(() => []);
  const visited = new Array(n).fill(false);
  for(const [src, dest] of edges) {
    adjList[src].push(dest);
    adjList[dest].push(src);
  }

  const dfs = (source) => {
    visited[source] = true;
    for (const n of adjList[source]) {
      if (!visited[n]) {
        visited[n] = true;
        dfs(n);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      connectedCount++;
      dfs(i);
    }
  }
  return connectedCount;
};

console.log(getConnectedComponentCount(5, [[0, 1], [1, 2], [0, 2], [3, 4]]));
console.log(getConnectedComponentCount(6, [[0, 1], [1, 2], [2, 0], [0, 3], [1, 4], [2, 5]]));
console.log(getNumberOfConnectedComponents(5, [[0, 1], [1, 2], [0, 2], [3, 4]]));
console.log(getNumberOfConnectedComponents(6, [[0, 1], [1, 2], [2, 0], [0, 3], [1, 4], [2, 5]]));
