$(document).ready(function(){
  CommentApp.$commentsDiv = $('#all_comments');


  $.ajax({
    url: '/comments',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(data) {
    CommentApp.renderAllComments(data);
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

CommentApp.renderAllComments = function(comments){
  var numComments = comments.length, i = 0;
  for(; i < numComments; i = i + 1) {
    CommentApp.renderComment(comments[i]);
  }
};

CommentApp.renderComment = function(comment){
  var $commentDiv = $('<div>', {text: comment.content});
  this.$commentsDiv.append($commentDiv);
};
