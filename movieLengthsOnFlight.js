function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length
  // let startIdx = 0;
  // let current = movieLengths[startIdx];

  // for (let i = 1; i < movieLengths.length; i ++) {
  //   if (current + movieLengths[i] === flightLength) {
  //     return true;
  //   } else {
  //     startIdx ++;
  //   }
  // }

  // return false;

  const moviesLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i ++) {
    let firstLength = movieLengths[i];
    let secondLength = flightLength - firstLength;

    if (moviesLengthsSeen.has(secondLength)) {
      return true;
    }
    moviesLengthsSeen.add(firstLength);
  }

  return false;
}
