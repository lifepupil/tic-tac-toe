'use strict';

$(document).ready(init);

function init(){
  $('#reset').click(reset);
  $('#start').click(start);
  $('td').click(selecting);



  // $('#pick').click(pick);
}

var wint = '';
var c;

function selecting() {
  var color = $('.active').css('background-color');
  $(this).css('background-color', color);

  // do test of win conditions before active is toggled
  // winTest();

  for (var col = 1; col<4 ; col++) {
    c = $('tr td:nth-child(col)');
    if (c[0].style.background === c[1].style.background && c[0].style.background === c[2].style.background && c[1].style.background === c[2].style.background) {
      // alert('YOU WIN');
      // break;
      wint = "YES";
    }
  }

  // this toggles which player is the active one
  $('.player').toggleClass('active');

}

function reset() {
  $('#chooser').show();
  $('#players').hide();
  $('td').css('background-color', 'white');
}

function start() {
  $('#players').show();
  var p1 = $('#p1-choose').val();
  var p2 = $('#p2-choose').val();
  $('#p1').css('background-color', p1);
  $('#p2').css('background-color', p2);
  $('#chooser').hide();

  var rnd = Math.floor(Math.random() *2) + 1;
  $('.player').removeClass('active');
  $('#p' + rnd).addClass('active');
}

// this should run after each player has completed their turn
// function winTest() {
//   // playerCol = $('#p2').css('background-color');
//   // var playerCol = $('.active').css('background-color');
//   // var winSatisfy = 0;
//
//   // test columns
//   for (var col = 1; col<4 ; col++) {
//     var c = $('tr td:nth-child(col)');
//     if (c[0].style.background === c[1].style.background && c[0].style.background === c[2].style.background && c[1].style.background === c[2].style.background) {
//       alert('YOU WIN');
//     }
//   }
//
//   // test rows
//
//   // test diagonals
//
// }

// function pick() {
//   $('td').addClass('x');
// }
