var computerGuess;
var win=0;
var lost=0;
var total=0;


$(document).ready(function(){


computerGuess= Math.floor(Math.random()*101)+19;
console.log(computerGuess)
  
 $("#target").html(computerGuess);
  

 
//  for (var i = 0; i < 4; i++) {
//     var random = Math.floor(Math.random() * 11) + 1;
//     // console.log(random);

//       var crystal = $(".picture");
//        crystal.attr({
//            "random-val": random
//        });

//        $(".picture").append(crystal);


//  }

 
//     $('.picture').on('click',function () {  
//       console.log($(this).attr("random-val"));
//     });
 var randomNumber1 = Math.floor(Math.random()*11)+1; 
 var randomNumber2 = Math.floor(Math.random()*11)+1; 
 var randomNumber3 = Math.floor(Math.random()*11)+1; 
 var randomNumber4 = Math.floor(Math.random()*11)+1; 

$('#num-wins').html(win);
$('#num-losses').html(lost);



function reset(){
    
    computerGuess= Math.floor(Math.random()*101)+19;
    console.log(computerGuess)
    
    $("#target").html(computerGuess);

  var randomNumber1 = Math.floor(Math.random()*11)+1; 
  var randomNumber2 = Math.floor(Math.random()*11)+1; 
  var randomNumber3 = Math.floor(Math.random()*11)+1; 
  var randomNumber4 = Math.floor(Math.random()*11)+1; 

  total=0;
  $('#your-score').html(total);


}



function youwin(){
    win++;
    $('#result').html("You Won!!!");
    
   $ ('#num-wins').text(win);

    reset();
   
}
 console.log(youwin())


function youlost(){
    lost++;
    $('#result').html("You Lost!!!");
   
    $('#num-losses').html(lost);


    reset();

}


$('.crystal1').on('click',function(){
    total =total + randomNumber1;
    console.log('newTot'+ total);
    $('#your-score').html("Your Score :" +total);

    if(total == computerGuess){
     youwin();
    }
    else if(total>computerGuess){
     youlost();
    }

})


$('.crystal2').on('click',function(){
    total =total + randomNumber2;
    console.log('newTot'+ total);
    $('#your-score').html("Your Score :" +total);

    if(total == computerGuess){
     youwin();
    }
    else if (total > computerGuess){
     youlost();
    }

}) 

$('.crystal3').on('click',function(){
    total =total + randomNumber3;
    console.log('newTot'+ total);
    $('#your-score').html("Your Score :" +total);

    if(total == computerGuess){
     youwin();
    }
    else if(total>computerGuess){
     youlost();
    }

})

$('.crystal4').on('click',function(){
    total =total + randomNumber4;
    console.log('newTot'+ total);
    $('#your-score').html("Your Score :" +total);

    if(total == computerGuess){
     youwin();
    }
    else if(total>computerGuess){
     youlost();
    }

})


});
