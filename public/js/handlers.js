const getPopularArtist = songs => {
  
  let songsWithCount = [...songs]
  let highestCount = 0
  
  // Track each song with a count and keep track of the highest count
  for(let song1 of songsWithCount) {
    song1.count = 0
    for(let song2 of songs)
      if(song1.artist === song2.artist)
        ++song1.count > highestCount && (highestCount = song1.count)
  }

  return songsWithCount.filter(song => song.count === highestCount)
}

const getBooksByType = (books, type) => {
  return books.filter(book => book.type === type)
}

module.exports = { getPopularArtist, getBooksByType }