class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }
    addNode(node) {
        // this.adjList[node.value] : {
        //     node: node,
        //     edges: []
        // }

        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1.value].edges.push(node2);
        this.adjList[node2.value].edges.push(node2);
    }
    removeEdge(node1) {
        delete this.adjList[node.value]
        const keys = Object.keys(this.adjList);
        keys.forEach(currNode => {
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
const node1 = {value: 1}
const node2 = {value: 2}
adjList.addNode(node1);
adjList.addNode(node2);

console.log(adjList);

// adjList.addEdge(node1);
// adjList.addEdge(node2);
