$("#currentDay").text(moment().format('MMMM Do YYYY, h:mma'));

    var userInput = $("#input");
    var userInputTwo = $("#inputTwo");
    var userInputThree = $("#inputThree");
    var userInputFour = $("#inputFour");
    var userInputFive = $("#inputFive");
    var userInputSix = $("#inputSix");
    var userInputSeven = $("#inputSeven");
    var userInputEight = $("#inputEight");
    var userInputNine = $("#inputNine");
    var span1 = $("#span1");

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
    localStorage.setItem("calendar9", userInputNine.val());
    var getItem = localStorage.getItem("calendar1");
    span1.textContent = getItem;
    
})

