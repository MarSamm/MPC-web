
var artTag;

if (document.querySelectorAll) {
  artTag = document.querySelectorAll('.art');
}


$(function(){
  $('#Art').click(function (){
    console.log("here");
    console.log(artTag);
    $(artTag).removeClass('bw');
  });
});

