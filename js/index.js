///<reference types="../@types/jquery" />

//open and cloas bar
$('.closeX').on('click', function () {
  $('#bar').animate({ width: '0' }, 500);
  $('#home-content').animate({marginLeft: '0'},500)
})

$('.three-dash').on('click', function () {
  $('#bar').animate({ width: '250px' }, 500);
  $('#home-content').animate({marginLeft: '250px'},500)
})

//Accordion

$('#Duration h2').on('click', function () {
  $('#Duration h2').not($(this)).next().slideUp(500)
  $($(this).next()).slideToggle(500)
})
 

//dateCount
addEventListener('load', function () {
  countDate('10 25 2022');
  $('#Duration h2').not($('#Duration h2').eq(0)).next().slideUp(0);
})
function countDate(pastDate) {
  let past = new Date(pastDate)
  let now = new Date();
  let deff = (past / 1000)-(now / 1000)  //لو عاوز تعد لقدام يا معلم اضرب في سالب واحد

  let days = Math.floor(deff / (24 * 60 * 60));
  let hours = Math.floor((deff-(days*24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((deff-(days*24 * 60 * 60)-(hours*60*60)) /  60);
  let second = Math.floor(deff-(days*24 * 60 * 60)-(hours*60*60) -(minutes*60));
  
  $('#Details .layer').eq(0).html(`${days} D`)
  $('#Details .layer').eq(1).html(`${hours} h`)
  $('#Details .layer').eq(2).html(`${minutes} m`)
  $('#Details .layer').eq(3).html(`${second} s`)

  setInterval(function () {
    countDate(pastDate);
  },1000)
}


//typing
$('textarea').on('input', function () {
  if (this.value.length <= 100) {
    $('#chanNum').html(100 - this.value.length);
    $('#available').removeAttr('class').attr('class','d-block')
    $('#Unavailable').removeAttr('class').attr('class','d-none')
  }
  else {
    $('#available').removeAttr('class').attr('class','d-none')
    $('#Unavailable').removeAttr('class').attr('class','d-block')
  }
})



//smoze scroll
$('#bar a').on('click', function () {
  let x = $(this).attr('href');
  let y = $(x).offset().top;
  console.log(y)
  $('html').animate({scrollTop:y},500);
})