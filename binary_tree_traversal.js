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
        func(tree.question);
        if (this.yes) this.yes.traverse(func);
        if (this.no) this.no.traverse(func);
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

export default BinaryTree;

myTree.traverse(console.log);
