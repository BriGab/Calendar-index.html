// $("#currentDay").text(moment().format('MMMM Do YYYY, h:mma'));
var userInput = $("#input1");
var userInputTwo = $("#input2");
var userInputThree = $("#input3");
var userInputFour = $("#input4");
var userInputFive = $("#input5");
var userInputSix = $("#input6");
var userInputSeven = $("#input7");
var userInputEight = $("#input8");
var userInputNine = $("#input9");


setInterval(function(){ 
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mma"));
}, 1000);

var schedule1 = localStorage.getItem("calendar1")
var schedule2 = localStorage.getItem("calendar2")
var schedule3 = localStorage.getItem("calendar3")
var schedule4 = localStorage.getItem("calendar4")
var schedule5 = localStorage.getItem("calendar5")
var schedule6 = localStorage.getItem("calendar6")
var schedule7 = localStorage.getItem("calendar7")
var schedule8 = localStorage.getItem("calendar8")
var schedule9 = localStorage.getItem("calendar9")
  
$(".save").on("click", function(event){
  event.preventDefault();

    localStorage.setItem("calendar1", userInput.val());
    localStorage.setItem("calendar2", userInputTwo.val());
    localStorage.setItem("calendar3", userInputThree.val());
    localStorage.setItem("calendar4", userInputFour.val());
    localStorage.setItem("calendar5", userInputFive.val());
    localStorage.setItem("calendar6", userInputSix.val());
    localStorage.setItem("calendar7", userInputSeven.val());
    localStorage.setItem("calendar8", userInputEight.val());
    localStorage.setItem("calendar9", userInputEight.val());
   
})
$("#input1").text(schedule1);
$("#input2").text(schedule2);
$("#input3").text(schedule3);
$("#input4").text(schedule4);
$("#input5").text(schedule5);
$("#input6").text(schedule6);
$("#input7").text(schedule7);
$("#input8").text(schedule8);
$("#input9").text(schedule9);


if (moment().format("H") > 9) {
  $("#input1").addClass("past");
} else if (moment().format("H") < 9) {
  $("#input1").addClass("future");
} else if (moment().format("H") === 9) {
  $("#input1").addClass("present")
}

if (moment().format("H") > 10) {
  $("#input2").addClass("past");
} else if (moment().format("H") < 10) {
  $("#input2").addClass("future");
} else if (moment().format("H") === 10) {
  $("#input2").addClass("present")
}

if (moment().format("H") > 11) {
  $("#input3").addClass("past");
} else if (moment().format("H") < 11) {
  $("#input3").addClass("future");
} else if (moment().format("H") === 11) {
  $("#input3").addClass("present")
}

if (moment().format("H") > 12) {
  $("#input4").addClass("past");
} else if (moment().format("H") < 12) {
  $("#input4").addClass("future");
} else if (moment().format("H") === 12) {
  $("#input4").addClass("present")
}

if (moment().format("H") > 13) {
  $("#input5").addClass("past");
} else if (moment().format("H") < 13) {
  $("#input5").addClass("future");
} else if (moment().format("H") === 13) {
  $("#input5").addClass("present")
}

if (moment().format("H") > 14) {
  $("#input6").addClass("past");
} else if (moment().format("H") < 14) {
  $("#input6").addClass("future");
} else if (moment().format("H") === 14) {
  $("#input6").addClass("present")
}

if (moment().format("H") > 15) {
  $("#input7").addClass("past");
} else if (moment().format("H") < 15) {
  $("#input7").addClass("future");
} else if (moment().format("H") === 15) {
  $("#input7").addClass("present")
}
if (moment().format("H") > 16) {
  $("#input8").addClass("past");
} else if (moment().format("H") < 16) {
  $("#input8").addClass("future");
} else if (moment().format("H") === 16) {
  $("#input8").addClass("present")
}
if (moment().format("H") > 17) {
  $("#input9").addClass("past");
} else if (moment().format("H") < 17) {
  $("#input9").addClass("future");
} else if (moment().format("H") === 17) {
  $("#input9").addClass("present")
}
//hint


