$(document).ready(function(){
  $.ajax({
    url: '/comments',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(data) {
    console.log(data);
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

});
