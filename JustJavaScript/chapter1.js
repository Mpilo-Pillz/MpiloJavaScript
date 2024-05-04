const originalSpreadSheet = {
    hasPendingChanges: false,
    author: "Mpi",
    created: new Date(),
    cells: [
        [1, 2, 3, 4, 5]
        ['a', 'b', 'c', 'd', 'e']
    ],
    metadata: { stamp: "sha67890", title: "Olimp" },


}
function duplicateSpreadSheet(original) {
    if (original.hasPendingChanges) {
        throw new Error('You need to save the file before you can duplicate it.');
    }

    let copy = {
        created: Date.now(),
        author: original.author,
        cells: original.cells,
        metadata: original.metadata,

    }
    copy.meta.title = "Copy of " + original.title
    return copy
}