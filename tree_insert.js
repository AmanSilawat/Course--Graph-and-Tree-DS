class Tree {
    constructor(question) {
        this.question = question;
        this.yes = null;
        this.no = null;
    }
    insertChild(question, side) {
        const newQuestion = new Tree(question); // {2}
        this[side] = newQuestion;
        return newQuestion;
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

const myTree1 = new Tree('You like Cricket');
myTree1.insertChild('Does cricket have 11 players per side. ', 'yes');

console.log(myTree1);
