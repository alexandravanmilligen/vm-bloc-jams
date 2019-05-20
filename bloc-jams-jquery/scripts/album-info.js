{
  $('#album-title').text(album.title);
  //The dollar sign calls the jquery function. We pass the jquery function
  //the element ID "album title" from the html. We call the .text method from jquery
  //and then pass it the data from the dummy source.

  $('img#album-cover-art').attr('src', album.albumArtUrl);
  //An image with an ID of album cover art is passed to the jquery function. Then we call the
  //.attr method to assign an attribut (quality) and value to the element with the JS rather than the HTML.

  $('#album-info .artist').text(album.artist);

  $('#release-info').text(album.releaseInfo);
}