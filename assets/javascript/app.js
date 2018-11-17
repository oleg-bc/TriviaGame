$(document).ready(function() {

    $(".pageOne").show();
    $(".pageThree").hide();
    $(".pageTwo").hide();
       
    var run=function() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
         
        //     var usrAnswers=storeValue();
        //    evalAnswers(usrAnswers,correctAnswers);
    }
    
    function decrement() {
        
        number--;
        var stopped=false;
        $("#showTimeLeft").html("<h2>" + number +" Seconds Left </h2>");
        if (number === 0) {
        stop();
        //the next 2 lines is a bit of a hack and need to be fixed.
        var usrAnswers=storeValue();
        evalAnswers(usrAnswers,correctAnswers);
        $(".pageOne").hide();
        $(".pageThree").show();
        $(".pageTwo").hide();
        $("#showTimeLeft").innerText+="  time's up ";
            stopped=true;
        
        }
        return stopped;
    }
    

    var stop=function() {
        clearInterval(intervalId);
        
    }
    
    var number = 45;
    var intervalId;
    //run();
    stop();

$(".startBtn").on("click", function(){ 
    var redirectTo;
    redirectTo="quiz";
     //debugger:
    console.log("Button clicked."); 
    redirect(redirectTo);
    run();
});    

$(".submitBtn").on("click", function(){
    stop();
    var redirectTo;
    redirectTo="last";
    redirect(redirectTo);
     //debugger:
     console.log("Button clicked."); 
     var usrAnswers=storeValue();
     //debug statement - find out why eval function not working
     console.log("usrAnswers is - at time of being called  " + usrAnswers);
     evalAnswers(usrAnswers,correctAnswers);
     //window.location="lastpage.html";
     $(".pageOne").hide();
     $(".pageThree").show();
     $(".pageTwo").hide();

});

var redirect = function(page) {
    if (page=="quiz"){
            // debug helper
    console.log("redirected to quizpage" );
        //window.location="quizpage.html";
        $(".pageOne").hide();
        $(".pageThree").hide();
        $(".pageTwo").show();
        // When user wants to go to next...
        
    }
    else if(page=="last"){
            // debug helper
    storeValue();
    console.log("redirected to lastpage" );
    //window.location="lastpage.html";
    $(".pageOne").hide();
    $(".pageThree").show();
    $(".pageTwo").hide();
       
    }   
 }

 //stores quiz answer key
 var correctAnswers=[50,"Washington","None","Koala","Octopus","Harp"];
 //function to capture user answers returns an array
var storeValue=function(){
var answers=[];  

var selValue = $('input[name=states]:checked').val(); 
var selValue2= $('input[name=presidents]:checked').val();

var selValue3= $('input[name=cat]:checked').val();
var selValue4= $('input[name=aard]:checked').val();
var selValue5= $('input[name=octo]:checked').val();
var selValue6= $('input[name=harp]:checked').val();


    //$('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
    answers.push(selValue);
    answers.push(selValue2);
    answers.push(selValue3);
    answers.push(selValue4);
    answers.push(selValue5);
    answers.push(selValue6);

    console.log("StoreValue returned following  "+answers);
    return answers;
}
//when calling make sure to use correctAnswers in place of answers 
//var usrAnswers=storeValue;
//evalAnswers(usrAnswers,correctAnswers);
 var evalAnswers=function(answersArray,answers){
     var correctCounter =0;
     var wrongCounter =0;
     var questionsAttempted=answersArray.length;
     //debug why this if seems to never start
     if (answersArray.length>0){
         //debug - find out why this function doesnt seem to start
         console.log("answers Array at start of loop is length  "+answersArray.length+" and correctAnswers has " + answers.length);
         for (i=0; i<answersArray.length;i++){
             if (answersArray[i]==answers[i]){
                correctCounter++;
                console.log("got a correct answer current count is  "+correctCounter);
                
             }else{wrongCounter++;}
         }
     }
     else{//no questions answered
    }

    //debug statments - getting the evalAnswers to work
    console.log("# of correct answers is "+correctCounter);
   
    $(".answered").text("You answered "+ correctCounter+ " of " + answersArray.length + " correctly");

 }
});

