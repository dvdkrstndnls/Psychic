
//establlish array and variables
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var userChoice = [];
var randomCharacterVar;
var computerChoice;
var wins = 0;
var losses = 0; 
var guessesLeft = 9;
var guessesSoFarVar = [];

// console.log(options);

//call function for computer choice
randomCharacter();

// //user chooses one character a-z and we capture those choices
document.onkeyup = function(event) {
    var userChoice = String.fromCharCode(event.keyCode);

        // .toLowerCase();
        userChoice = userChoice.toLowerCase();

        console.log(userChoice);

    // //compare choices and determine a win or loss or tie - this is Lisa's code to emulate perhaps
    if (userChoice === computerChoice) {
        alert("I can't believe it...you guessed it, my darling!");
        wins = wins + 1;
        document.getElementById("wins").innerHTML = wins;
        randomCharacter();
        guessesLeft = 9;
        guessesSoFarVar = "Let's go again...you haven't guessed anything this time around";
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesSoFarVar = [];
    } else if (guessesLeft > 0){
        //CHRIS FEEDBACKpush and then loop to display
        guessesSoFarVar.push(" " + userChoice);
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesLeft = guessesLeft - 1;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        
        // console.log(userChoice); 
    }
    else {
        // increment losses print loses to screen 
        losses = losses + 1;
        document.getElementById("losses").innerHTML = losses;

        //restart game
        randomCharacter();
        //reset guesses left to 9
        guessesLeft = 9;
        guessesSoFarVar = "Let's go again...you haven't guessed anything this time around";
        document.getElementById("guessesSoFar").innerHTML = guessesSoFarVar;
        guessesSoFarVar = [];
        
    }
    // console.log(wins);    
    }
    



// //computer chooses one random character a-z - used math random formula to create computer choice (computer to make a choice)
function randomCharacter() {
    var randomNumber = Math.floor(Math.random() * 
        options.length);
    computerChoice = options[randomNumber];
    
    console.log(computerChoice);
}


//Mar 12 todo:
// use Win logic to build Losses logic
// update loss and guesses left html to span
//use win logic to build guess so far (DECREMENT) another IF ELSE statement




//CHRIS FEEDBACK >> indexOf to
//span that you modify the text of
//loop over the arry that I creat and create a comma sepearte vrersion using concat
// END chris feedback


// //if userChoice matches computerChoice
// if (userChoice === computerChoice) {
//     document.getElementById('wins').value
//     for (var wins; wins++)

//     }

    
// // }
// //     //and increment var wins by 1 and restart game - user presses any alpha key to play again
// //     var wins + 1 ||
// // // logic to say what happens when userChoice does not match computerChoice
// // } else if (userChoice !== computerChoice) {
// //     // increment var losses by +1 || 
// // // display and add to var guessesSoFar
// // var guessesSoFar = 
// // // decrement guesses left by +1
// // //restart game - user presses any alpha key to play again


// // //display reuslt to user
//  var html = "<p> Guess what letter I'm thinking of ??!?!?</p>" +
//  "<>wins: " + wins + "</p>" +
//  "<p>losses: " + losses + "</p>"
//  "<p>losses: " + guessesLeft + "</p>"
//  "<p>losses: " + guessesSoFar + "</p>";
 
//  ;
 
//  document.querySelector("#game").innerHTML = html;
// }

// function reWriteStats(){

//     console.log(car.model);
     
//       console.log(car.mileage);
      
//       car.driveToWork();
//       function hello(){};
    
//       car.driveAroundWorld();
      
//       car.getTuneUp();



// // to debug use
// console.log(userChoice);
// console.log(----------);
// console.log(computerChoice);
// console.log(----------);
// console.log(wins);
// console.log(----------);
// console.log(losses);
// console.log(----------);
// console.log(guessesLeft);
// console.log(----------);
// console.log(guessesSoFar);




// // 8. Push your selected game to Github Pages.


// // ## Option One: Psychic Game (Basic)


// // 1. [Watch the demo](psychic-game-demo.mov). DONE

// // 2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page: DONE

// // 3. Guess what letter I'm thinking of DONE

// // 4. Wins: (# of times the user has guessed the letter correctly)

// // 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// // 6. Guesses Left: (# of guesses left. This will update)
// var answer = a
// var userChoice;
// userChoice = prompt("what's your guess");
// for (i=0; i<9; i++){
//     u
//     if (userChoice === computerChoice)
//         alert("you guessed right!")
//         break;
// } else {
//     userChoice = prompt("Please try again");

// }

// function newFunction() {
//     return 'nothing';
// }
// // 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// // 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// // 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

// // ## Option Two: Hangman Game (Challenge - Recommended)

// // ![Hangman](Images/2-Hangman.jpg)

// // 1. [Watch the demo](hangman-game-demo.mov).

// // 2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

// // 3. Use key events to listen for the letters that your players will type.

// // 4. Display the following on the page:

// // 5. Press any key to get started!

// // 6. Wins: (# of times user guessed the word correctly).

// //    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

// //    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// // 7. Number of Guesses Remaining: (# of guesses remaining for the user).

// // 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// // 9. After the user wins/loses the game should automatically choose another word and make the user play it.

// // ##### Hangman Game Bonuses

// // 1. Play a sound or song when the user guesses their word correctly, like in our demo.
// // 2. Write some stylish CSS rules to make a design that fits your game's theme.
// // 3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// // 4. Save your whole game and its properties in an object.
// // 5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// // 6. Don't forget to place your global variables and functions above your object.
// //    * Remember: global variables, then objects, then calls.
// // 7. Definitely talk with a TA or your instructor if you get tripped up during this challenge.

// // - - -

// // #### A Few Tips

// // 1. **IMPORTANT:** Whichever assignment you choose, code your game one piece at a time! Code all of your apps one piece at a time. _Always code one piece at a time!_
// // 2. Pseudocode your program and break the app down into tiny, manageable fragments. This will make the coding process much less frustrating and a veritable Mach number faster. Otherwise, you'll be chipping away at a giant chunk of abstraction for way too many hours.

// //    * The ability to solve a large problem by treating it as a set of smaller ones is the hallmark of a strong programmer. Best start adapting this into your development routine now, to better prepare for your more complex future projects.
// //    * Remember:
// //      1. Split the whole program into many distinct, pseudocoded problems.
// //      2. Focus on one of the smaller problems and solve it.
// //      3. Only when you solve one problem should you then move onto your next problem.

// // 3. When you encounter bugs (and we all do), `console.log` will become your best friend. Regularly check your console to make sure your app is spitting out the right values.

// //    * As a more advanced—but more powerful—alternative, feel free to experiment with the [Chrome DevTools Debugger](https://developers.google.com/web/tools/chrome-devtools/).

// // 4. Try your best to deliver a 'working/playable game' by the end of the deadline. If you're not making progress with Hangman, switch gears to the Psychic game. Contact your TA/Instructor if you're not making progress after 2 hours. We're here to help!

// // 5. Substance over style! Submitting a working game matters more that making a broken app that at least looks pretty. We're focusing on game mechanics, not just on the look and feel of your app.
// // 6. That said, coding a functional app that also looks pretty would be impressive.

// // 7. Always commit your work and back it up with GitHub pushes. You don't want to lose hours of your work because you didn't push it to GitHub every half hour or so.

// //    * **Commit often**.

// // 8. Turn in anything you have! Even if you don't finish, we still want to see what you were able to accomplish in the time we gave you. This will help us know what concepts we could help you with, as well as what topics we should focus on in the coming lectures.

// // - - -

// // ### Minimum Requirements

// // Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

// // - - -

// // ### Create a README.md

// // Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

// // * [About READMEs](https://help.github.com/articles/about-readmes/)

// // * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

// // - - -

// // ### Add To Your Portfolio

// // After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

// // - - -

// // ### One More Thing

// // If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

// // **Good Luck!**
