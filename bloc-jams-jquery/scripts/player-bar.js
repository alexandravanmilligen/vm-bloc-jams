{
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate(player.currentlyPlaying);
    $(this).attr('playState', player.playState);
    //This refers to the button. When we click the button, we're going to use the
    //.attr method (atribute). We're adding an attribute to the button element which will be the value of whatever playState evaluates to (e.g. "playing").
  });

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') {
      return;
    }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    console.log(currentSongIndex);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) {
      //If the nextSongIndex is greater than or equal to the length of the array, return nothing (candel it out).
      return;
    }

    const nextSong = album.songs[nextSongIndex];
    console.log(nextSong);
    helper.playPauseAndUpdate(nextSong);
  });

  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') {
      return;
    }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    console.log(currentSongIndex);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) {
      return;
    }

    const previousSong = album.songs[previousSongIndex];
    console.log(previousSong);
    helper.playPauseAndUpdate(previousSong);
  });

  $('#time-control input').on('input', function(event) {

    //The input event is when the slider is slid/when the value of that field changes.
    player.skipTo(event.target.value);
  });

  //The .on method is the jQuery version of the event handler.

  setInterval(() => {
    if (player.playState !== 'playing') {
      return;
    }
    const currentTime = player.prettyTime(player.getTime());
    //returns the current time in the song.
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(currentTime);
    $('#time-control input').val(percent);
    //The .val method can be used to read the value of the form element or also to
    //set the value of the form element. In this case, we're reading the slider "form".
    //We update the slider once per second with the percentage of the song.
  }, 1000);

  $('#volume-control input').on('input', function(event) {

    //The input event is when the slider is slid/when the value of that field changes.
    player.setVolume(event.target.value);
  });
}