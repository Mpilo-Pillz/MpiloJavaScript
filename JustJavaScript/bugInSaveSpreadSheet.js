// Primitive Values are stored on the stack. Faster access - low storage space
// Reference values are stored on the stack. Slower Access - more storage space

const myInvoice = {
    created: "Today",
    author: "Mpilo",
    cells: [
        [1, 2, 3, 4, 5],
        ["a", "b", "c", "d", "e"]
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

// With REference values there is only ever one object no copies are done
// ass soon as a variable is asssigned to the the object it point to the same object every one is pointing to.
// Eg I am Pillz, Mpilo, Fikasentani, The moment some one is whith Pillz the are also with Fikasentani I am not copied

