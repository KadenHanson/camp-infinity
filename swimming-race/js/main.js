const finishPercentage = 92;

const qaGoal = 50;
const csGoal = 80;
const productGoal = 4;
const psGoal = 20;
const ldGoal = 2;
const devGoal = 120;

let qaActual = 0;
let csActual = 0;
let productActual = 0;
let psActual = 0;
let ldActual = 0;
let devActual = 0;

function calculateDistance(goal, actual) {
  const goalPercentage = (actual / goal) * 100;
  return ((goalPercentage * finishPercentage) / 100) + '%';
}

function moveSwimmers() {
  $('#swimmer-1').css({ 'left': calculateDistance(qaGoal, qaActual) });
  $('#swimmer-2').css({ 'left': calculateDistance(csGoal, csActual) });
  $('#swimmer-3').css({ 'left': calculateDistance(productGoal, productActual) });
  $('#swimmer-4').css({ 'left': calculateDistance(psGoal, psActual) });
  $('#swimmer-5').css({ 'left': calculateDistance(ldGoal, ldActual) });
  $('#swimmer-6').css({ 'left': calculateDistance(devGoal, devActual) });
}

$(document).ready(function() {
  moveSwimmers();
});

$('input').change(function() {
  const id = parseInt($(this).attr('id'));
  const val = $(this).val();
  
  switch(id) {
    case 1:
      qaActual = val;
      break;
    case 2:
      csActual = val;
      break;
    case 3:
      productActual = val;
      break;
    case 4:
      psActual = val;
      break;
    case 5:
      ldActual = val;
      break;
    case 6:
      devActual = val;
      break;
  }

  moveSwimmers();
});