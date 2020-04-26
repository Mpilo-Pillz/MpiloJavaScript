function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function() {
            return this.inventory.reduce((total, book) => {
                console.log('book-->', book.price);
                console.log('total-->', total);
               return total + book.price 
            }, 0
            );
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    {title: 'Head First', price: 10 },
    {title: 'For Dummies', price: 15}
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('For Dummies'));


//////////////////////////////////////////Enanced Object Literal ////////////////////////////////////
// function createBookShop(inventory) {
//     return {
//         inventory,
//         inventoryValue() {
//             return this.inventory.reduce((total, book) => {
//                 console.log('book-->', book.price);
//                 console.log('total-->', total);
                
//                 return total + book.price
//             }, 0
//             );
//         },
//         priceForTitle(title) {
//             return this.inventory.find(book => book.title === title).price;
//         }
//     };
// }

// const inventory = [
//     {title: 'Head First', price: 20 },
//     {title: 'For Dummies', price: 35}
// ];

// const bookShop = createBookShop(inventory);

// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle('For Dummies'));