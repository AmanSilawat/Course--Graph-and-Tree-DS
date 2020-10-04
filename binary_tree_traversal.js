// *Binary Tree Traversal

// Fixed Operations
// contains(val), size(tree), traverse(tree)

// Dynamic Operations
// insert(x, y), remove(node),
// reOrder(x, y)

// *Reference
// const family = {
//     name: 'Ashleigh',
//     children: [
//         {
//             name: 'Sammy',
//             children: [
//                 {
//                     name: 'Bowser',
//                     children: [{ name: 'P' }],
//                 },
//             ],
//         },
//         { name: 'Alex' },
//     ],
// };

class BinaryTree {
    constructor(question) {
        this.question = question;
        this.yes = null;
        this.no = null;
    }

    traverse(func) {
        func(this.question);
        if (this.yes) this.yes.traverse(func);
        if (this.no) this.no.traverse(func);
    }

    countReccos(node) {
        if (node === null) {
            return 0;
        }
        if (!node.yes && !node.no) {
            return 1;
        }

        return countReccos(node.yes) + countReccos(node.no);
    }

    contains(question) {
        if (this.question === question) {
            return true;
        }
        return (
            (this.yes && this.yes.contains(question) ? true : false) ||
            (this.no && this.no.contains(question) ? true : false)
        );
    }
}
let myTree = new BinaryTree('You like Cricket');
console.log(myTree);
// myTree.traverse('Does cricket have 11 players per side. ', 'yes');
myTree.traverse(console.log);

//..
//....
//......
//........
//?Tree Traversals Typs

//*1.Pre-Order
// root, left, right
function preOrder(node, func = console.log) {
    func(node);

    if (node.left) {
        node.left.preOrder(func);
    }

    if (node.right) {
        node.right.preOrder(func);
    }
}

// left, right, root
//*2.Post-Order
function postOrder(node, func = console.log) {
    if (node.left) {
        node.left.postOrder(func);
    }

    if (node.right) {
        node.right.postOrder(func);
    }

    func(node);
}

//*0.In-Order
// left, root, right
function inOrder(node, func = console.log) {
    if (node.left) {
        node.left.inOrder(func);
    }

    func(node);

    if (node.right) {
        node.right.inOrder(func);
    }
}
