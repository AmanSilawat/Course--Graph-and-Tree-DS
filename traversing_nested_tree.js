//*Traversing Nested Tree

function traverse(tree) {
    console.log(tree.name);
    if (tree.children) {
        tree.children.forEach((child) => {
            // console.log(val.name);
            traverse(child);
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
