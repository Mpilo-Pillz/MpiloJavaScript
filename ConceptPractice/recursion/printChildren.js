function printChildren(t) {
    if (t.children.length === 0) {
        return
    }
    t.children.forEach(child => {
        console.log(child.name);
        printChildren(child)
    });
}

const tree = {
    name: 'Sfiso',
    children: [
        {
            name: 'Sabelo',
            children: []
        },
        {
            name: 'Samkelo',
            children: [
                { name: 'Sibonelo', children: [] },
                { name: 'Sizakele', children: [] },
                { name: 'Sibusiso', children: [] },
            ]
        }
    ]
}

printChildren(tree)