const books = [
    {
        title: 'A very bad book',
        authors: ['Javier Tyme'],
        rating: 2,
        genre: ['Useless adivse impossible to prove or disprove']
    },
    {
        title: 'A very bad book',
        authors: ['Javier Tyme'],
        rating: 2.5,
        genre: ['The story serves no purpose']
    },
    {
        title: 'A very good book',
        authors: ['Reed Worthy'],
        rating: 8,
        genre: ['A book about holding your self accountable for what you have an have not achieved']
    },
    {
        title: 'A great book',
        authors: ['Xavi Reed Worthy'],
        rating: 10,
        genre: ['A book about holding your self accountable for what you have an have not achieved']
    },
    {
        title: 'A Good book',
        authors: ['Uptwo Yu'],
        rating: 7.5,
        genre: ['A book about a rich parent and a poor parent']
    },
    {
        title: 'Another Good book',
        authors: ['Uptwo Yu'],
        rating: 7,
        genre: ['A book about types of income streams ']
    }
]

const groupingBooks = books.reduce((groupdedBooks, eachBook) => {
    const key = Math.floor(books.rating);
    if (!groupdedBooks[key]) groupdedBooks[key] = [];
    groupdedBooks[key].push(eachBook)
    return groupdedBooks;
}, {})

console.log(groupingBooks);