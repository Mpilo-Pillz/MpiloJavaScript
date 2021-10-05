const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

// useEffect(() => {
//     setIsLoading(true)
//     fetch('http://localhost:1337/meetups').then((response) => {
//       return response.json()
//     }).then((data) => {
//       const meetups = [];

//       for (const key in data) {
//         const meetup = {
//           id: key,
//           ...data[key]
//         };
//         meetups.push(meetup)
//       }
//       setIsLoading(false)
//       setLoadedMeetups(meetups)
//       // the above to are not dependencies beaucse react guarantees that they will never change
//     })
//   }, [])


// Ingredients
useEffect(() => {
  fetch('http://localhost:1337/ingredients').then((responseData) => {
    const loadedIngredients = [];
    for (const key in responseData) {
      loadedIngredients.push({
        id: key,
        title: responseData[key].title,
        amount: responseData[key].amount
      });
    }
    setUserIngredients(loadedIngredients)
  })
}, [])