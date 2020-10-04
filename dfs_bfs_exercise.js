class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }
    addNode(node) {
        this.adjList[node] = [];
        // this.nodes.push(node);
    }
    depthFirstTraversal(startingNode, func = console.log) {
        if (startingNode === undefined) {
            return 'No starting node was provided';
        }
        let nodeStack = [];
        let visitedArr = [];

        nodeStack.push(startingNode);
        visitedArr[startingNode] = true;

        whi  le (nodeStack.length) {
            const current = nodeStack.pop();
            const neighbors = this.adjList[current];
            func(current);

            neighbors.forEach((neighbor) => {
                if (!visitedArr[neighbor]) {
                    nodeStack.push(neighbor);
                    visitedArr[neighbor] = true;
                }
            });
        }
    }
    breadthFirstTraversal(startingNode, func = console.log) {
        if (startingNode === undefined) {
            return 'No starting node was provided';
        }
    
        let nodeStack = [];
        let visitedArr = [];
    
        nodeStack.push(startingNode);
        visitedArr[startingNode] = true;
    
        while (nodeStack.length) {
            const current = nodeStack.shift();
            const neighbors = this.adjList[current];
            func(current);
    
            neighbors.forEach((neighbor) => {
                if (!visitedArr[neighbor]) {
                    nodeStack.push(neighbor);
                    visitedArr[neighbor] = true;
                }
            });
        }
    }
    addEdge(node1, node2) {
        this.adjList[node1.value].edges.push(node2);
        this.adjList[node2.value].edges.push(node2);
    }
    removeEdge(node1) {
        delete this.adjList[node.value];
        const keys = Object.keys(this.adjList);
        keys.forEach((currNode) => {
            const edges = this.adjList[currNode].edges;
            const index = edges.indexOf(node);
            if (index > -1) {
                // remove it
                edges.splice(index, 1);
            }
        });
    }
}

const adjList = new Graph();
const node1 = { value: 1 };
const node2 = { value: 2 };
adjList.addNode(node1);
adjList.addNode(node2);

console.log(adjList);

// adjList.addEdge(node1);
// adjList.addEdge(node2);
