function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const unvisited = Object.keys(graph);

  unvisited.forEach(node => {
    distances[node] = Infinity;
  });

  distances[startNode] = 0;

  while (unvisited.length) {
    const currentNode = unvisited.reduce((minNode, node) => {
      return distances[node] < distances[minNode] ? node : minNode;
    }, unvisited[0]);

    unvisited.splice(unvisited.indexOf(currentNode), 1);
    visited[currentNode] = true;

    graph[currentNode].forEach(neighbour => {
      if (!visited[neighbour]) {
        const tentativeDistance = distances[currentNode] + neighbour.distance;

        if (tentativeDistance < distances[neighbour.node]) {
          distances[neighbour.node] = tentativeDistance;
        }
      }
    });
  }

  return distances;
}
