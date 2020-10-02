// add solution here
function theBeatlesPlay (musician, instrument) {
  var play = '';
  for(let i = 0; i < musician.length; i++) {
    play.push(`$(musician[i]) plays $instrument[i]`);
  }
}
