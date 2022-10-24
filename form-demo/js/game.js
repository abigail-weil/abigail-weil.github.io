let fname = "";

//function for the greet
function greet() {
    //grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let lname = document.getElementById("lname").value;

    //show the result!
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

//function for trivia game
function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer")
    //get the checked values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    //decide what to "print"
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?"
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!"
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }
}

//function for two truths and a lie
function lie() {
    let lieAnswer = document.getElementById("lie-answer")
    let catSelected = document.getElementById("cat").checked;
    let planeSelected = document.getElementById("plane").checked;
    let tomatoSelected = document.getElementById("tomato").checked;

    if (catSelected) {
        lieAnswer.innerHTML = fname + ", you are wrong. Cats are so cute!"
    } else if (planeSelected) {
        lieAnswer.innerHTML = fname + ", you are correct! I would never do that!"
    } else if (tomatoSelected) {
        lieAnswer.innerHTML = fname + ", you are wrong. Tomatoes are so good!"
    }
}