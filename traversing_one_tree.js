//*Traversing One Tree

function traverse(tree) {
    console.log(tree.name);
    if (tree.children) {
        tree.children.forEach((val) => {
            console.log(val.name);
        });
    }
}

/*
const mother = { name: 'Ashleigh' };
const son = { name: 'Sammy' };
const daughter = { name: 'Alex' };

const mother = {
    name: 'Ashleigh',
    children: [son, daughter],
};
*/