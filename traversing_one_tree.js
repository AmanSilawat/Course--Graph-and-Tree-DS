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
const family = {
    name: 'Ashleigh',
    children: [
        {
            name: 'Sammy',
            children: [
                {
                    name: 'Bowser',
                    children: [{ name: 'P' }],
                },
            ],
        },
        { name: 'Alex' },
    ],
};
*/