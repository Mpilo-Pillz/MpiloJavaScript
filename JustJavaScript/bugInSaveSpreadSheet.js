const myInvoice = {
    created: "Today",
    author: "Mpilo",
    cells: [
        [1, 2, 3, 4, 5],
        ["a", "b", "c", "d", "d"]
    ],
    metadata: { title: "September Invoice" }
}

console.log('MyInvoice', myInvoice)

function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
        throw new Error('You need to save the file before you can duplicate');
    }

    let copy = {
        created: "After today",
        author: original.author,
        cells: original.cells,
        metadata: original.metadata
        // metadata: `Copy of ${original.metadata.title}`
    };
    copy.metadata.title = 'Copy of ' + original.metadata.title;
    return copy;
}

console.log(duplicateSpreadsheet(myInvoice));
console.log('MyInvoiceAfter', myInvoice)

