$(document).ready(function () {
  $('button').click(function () {
    $('button').addClass('bw');
    $('button').removeClass('selected');
    $(this).addClass('selected');
  })

})

//Visual Arts

var artTag;

if (document.querySelectorAll) {
  visTag = document.querySelectorAll('.art');
}


$(function(){
  $('#Arts').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(visTag);
    $(visTag).removeClass('bw');
  });
});



//Programming

var progTag;

if (document.querySelectorAll) {
  progTag = document.querySelectorAll('.prog');
}


$(function(){
  $('#Prog').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(progTag);
    $(progTag).removeClass('bw');
  });
});



//Education


var edTag;

if (document.querySelectorAll) {
  edTag = document.querySelectorAll('.ed');
}


$(function(){
  $('#Ed').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(edTag);
    $(edTag).removeClass('bw');
  });
});

//Communication


var comTag;

if (document.querySelectorAll) {
  comTag = document.querySelectorAll('.com');
}


$(function(){
  $('#Com').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(comTag);
    $(comTag).removeClass('bw');
  });
});

//Entrepeneurship


var entreTag;

if (document.querySelectorAll) {
  entreTag = document.querySelectorAll('.entre');
}


$(function(){
  $('#Entre').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(entreTag);
    $(entreTag).removeClass('bw');
  });
});

// Economy and Politics


var SocScTag;

if (document.querySelectorAll) {
  econPTag = document.querySelectorAll('.soc');
}


$(function(){
  $('#SocSc').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(econTag);
    $(econTag).removeClass('bw');
  });
});


//Literature


var litTag;

if (document.querySelectorAll) {
  litTag = document.querySelectorAll('.lit');
}


$(function(){
  $('#Lit').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(litTag);
    $(litTag).removeClass('bw');
  });
});

//History


var hisTag;

if (document.querySelectorAll) {
  hisTag = document.querySelectorAll('.his');
}


$(function(){
  $('#His').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(hisTag);
    $(hisTag).removeClass('bw');
  });
});

//Philospphy


var philTag;

if (document.querySelectorAll) {
  philTag = document.querySelectorAll('.phil');
}


$(function(){
  $('#Phil').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(philTag);
    $(philTag).removeClass('bw');
  });
});

//Natural Sciences

var natTag;

if (document.querySelectorAll) {
  natTag = document.querySelectorAll('.nat');
}


$(function(){
  $('#Nat').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(natTag);
    $(natTag).removeClass('bw');
  });

});

//Hard Sciences


var harTag;

if (document.querySelectorAll) {
  harTag = document.querySelectorAll('.har');
}


$(function(){
  $('#Har').click(function (){
    $('.all').addClass('bw');
    console.log("here");
    console.log(harTag);
    $(harTag).removeClass('bw');
  });
});
