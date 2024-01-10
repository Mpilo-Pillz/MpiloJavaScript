const anime = {
    mediaType: "video",
    id: 3,
    shows: [
        {
            name: "dragonball super",
            numberOFEpisodesWatched: 12,
        },
        {
            name: "dragonballz",
            numberOFEpisodesWatched: 130,
        },
        {
            name: "dragonball",
            numberOFEpisodesWatched: 45,
        }
    ]
}

const updateEpisodesWatched = (showName, newEpisodesWatched) => {
    const show = anime.shows.find(s => s.name === showName);
    if (show) {
        show.numberOFEpisodesWatched = newEpisodesWatched;
        //   this.sendUpdatedData();
    }
    console.log(anime);
}

updateEpisodesWatched('dragonball super', 65);