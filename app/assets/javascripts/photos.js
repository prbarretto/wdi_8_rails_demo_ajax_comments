$(document).ready(function($){
  CommentApp.$photosDiv = $('#all_photos');


  $.ajax({
    url: '/photos',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(data) {
    CommentApp.renderAllPhotos(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
});

var CommentApp = CommentApp || {
}

CommentApp.renderAllPhotos = function(photos){
  var numPhotos = photos.length, i = 0;
  for(; i < numPhotos; i = i + 1) {
    CommentApp.renderPhoto(photos[i]);
  }
};

CommentApp.renderPhoto = function(photo){
  var $photoImg = $('<img>', {src: photo.url});
  this.$photosDiv.append($photoImg);
};
