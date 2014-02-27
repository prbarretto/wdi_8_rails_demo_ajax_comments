$(document).ready(function(){
  PhotoApp.$photosDiv = $('#all_photos');


  $.ajax({
    url: '/comments',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(data) {
    PhotoApp.renderAllPhotos(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
});

PhotoApp = {
}

PhotoApp.renderAllPhotos = function(photos){
  var numPhotos = photos.length, i = 0;
  for(; i < numPhotos; i = i + 1) {
    PhotoApp.renderPhoto(photos[i]);
  }
};

PhotoApp.renderPhoto = function(photo){
  var photoImage = '<img src="' + photo.url + '">';
  debugger
  this.$photosDiv.append(photoImage);
};
