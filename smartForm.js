// Your jQuery goes here

var userData = {
  name:'',
  email:'',
  html: {Likes:[], disLikes:[]},
  css: {Likes:[], disLikes:[]},
  js: {Likes:[], disLikes:[]},
  strength: {css:'',html:'',js:'', },
  currentQuestion: '#welcome'
};

$('#start').click(function(){
  //console.log("start");
  $('#welcome').hide();
  $('#q1').show();
});

// $('#name').change(function(event){
//   console.log($('#name').val());
//   // $('#welcome').hide();
//   // $('#q1').show();
// });




$('#q1next').click(function(){
  //console.log("start");
  if($('#name').val() && $('#name').val()){
    userData.name= $('#name').val();
    userData.email= $('#email').val();
    $('#q2').show();
    $('#q1').hide();
  }
  else {
    alert('Enter Value');
  }
 });

