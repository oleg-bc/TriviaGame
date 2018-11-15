$(document).ready(function() {
    // page is fully loaded, including all frames, objects and images
    //alert("window is loaded");
    var run=function() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    
    function decrement() {
        number--;
        $("#showTimeLeft").html("<h2>" + number + "</h2>");
        if (number === 0) {
        stop();
        $("#showTimeLeft").innerText+="  time's up ";
        }
    }
    
    var stop=function() {
        clearInterval(intervalId);
    }
    
    var number = 100;
    var intervalId;
    run();



$(".startBtn").on("click", function(){ 
    var redirectTo;
    redirectTo="quiz";
     //debugger:
    console.log("Button clicked."); 
    redirect(redirectTo);
});    

$(".submitBtn").on("click", function(){
    stop();
    var redirectTo;
    redirectTo="last";
    redirect(redirectTo);
     //debugger:
     console.log("Button clicked."); 
    
});



var redirect = function(page) {
    if (page=="quiz"){
            // debug helper
    console.log("redirected to quizpage" );
        window.location="quizpage.html";
    }
    else if(page=="last"){
            // debug helper
    storeValue();
    console.log("redirected to quizpage" );
    window.location="lastpage.html";
    }

 }

  var storeValue=function(){
    var answers=[];  
    var selValue = $('input[name=states]:checked').val(); 
    var selValue2= $('input[name=presidents]:checked').val();
      //$('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
      answers.push(selValue);
      answers.push(selValue2);
      console.log(answers);
      return answers[];
  }

 var evalAnswers=functions(answersArray){
     //Determine how many questions were attempted - the length of the answersArray
     //create an array with answers called ANSWRS - this is the quiz key
     //create var correct answers
     //check whether the element exists in the array ANSWRS
     // increment correctAnswers var for each match
 }


// <input type="radio" name="rbnNumber" value="1" /> Number 1<br/>
// <input type="radio" name="rbnNumber" value="2" /> Number 2 <br/>
// <input type="radio" name="rbnNumber" value="3" /> Number 3
// <br/><br/>
// <input type="button" id="btnGetValue" Value="Get Value" />
// <p></p>


// $('#submitBtn').click(function() {
//     var answers=[];  
//     var selValue = $('input[name=states]:checked').val(); 
//       //$('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
//       answers.push(selValue);
//       console.log(answers);
      
//   });



// {/* <form id="q1"><br>How Many states in the union?<br>
//             <input type="radio" name="states" value="49"> 49<br>
//             <input type="radio" name="states" value="50"> 50<br>
//             <input type="radio" name="states" value="51"> 51<br>  
          
//           </form>

  
//     <form id="q2"><br>Who's the 1st president<br>
//         <input type="radio" name="Hamilton" value="1"> Hamilton<br>
//         <input type="radio" name="Washington" value="2"> Washington<br>
//         <input type="radio" name="Lincoln" value="3"> Lincoln<br>  
//         <input type="button" value="Submit" class="submitBtn">
//       </form> */}
 

// var number = 100;
// var intervalId;
//$("#stop").on("click", stop);

//$("#resume").on("click", run);


    //run();

});