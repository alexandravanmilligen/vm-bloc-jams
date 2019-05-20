{
  album.songs.forEach((song, index) => {
    //song refers to the object and index refers to the number in the list.
    song.element = $(`
  <tr>
  <td>
  <button>
    <span class="song-number">${index + 1}</span>
    <span class="ion-play"></span>
    <span class="ion-pause"></span>
  </button>
</td>
  <td>${song.title}</td>
  <td>${player.prettyTime(song.duration)}</td>
   </tr>
`);
    //These DOM elements are now stored into the variable song.element. We now need to insert them into the DOM.
    //Using the back tick, tells the browser to interpret everything wrapped inside the backtick as JS rather than literal HTML.


    $('#song-list').append(song.element);
    //This is calling the append method and calling all the <tr> elements (dom elements) that are stored in the song.element variable.

    song.element.on('click', event => {
      player.playPause(song);
      $('button#play-pause').attr('playState', player.playState);
      //The .attr method adds an attribute to the html element
      //We are adding a playstate attribute and the value of it is player.playState.
    });
  });
}