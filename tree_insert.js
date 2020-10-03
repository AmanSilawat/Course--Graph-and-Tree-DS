class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    insertChild(value) {
        const newTree = new Tree(value); // {2}
        this.children.push(newTree);
        return newTree;
    }

    // Uses a Depth-First Traversal
    static traverse(tree, func = console.log) {}

    contains(searchValue) {}

    static size(tree) {}

    static find(tree, value) {}

    insert(parentTree, value) {}

    remove(value) {}

    reorder(node1, node2) {}
}

const myTree1 = new Tree(1);
myTree1.insertChild(2);

console.log(myTree1);
// {
//     value: 1,
//     children: []
// }

// export default Tree;
