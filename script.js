console.log("Script started");

// Variable to track the number of clicks
let clicks = 0;

// Value of each click
let clickValue = 1

// Variable to store the click counter h1
let clickDisplay = document.getElementById("click-display");
// Variable to store the level display
let levelDisplay = document.getElementById("level-display");


//Set initial text for click counter
clickDisplay.innerText = "Clicks: " + clicks;

// Called each time the image is clicked
function handleClick() {
    console.log("click");

    //Add one to click count
    clicks = clicks + clickValue;

    //Update display
    clickDisplay.innerText = "Clicks: " + clicks;

// Level 1 complete alert
    if(clicks == 10) {
    alert("Good Boy! You made it to level 2! ")
    levelDisplay.innerText = "Level 2";
    clickValue = 2;
}
}
