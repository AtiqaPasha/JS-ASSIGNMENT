// TASK-1


    var zakatPercentage = (0.025);

    var userInput = parseFloat(prompt("Enter Your Zakat Value", "0.025"), "0");
    document.write(userInput);


    var YourZakat = zakatPercentage * userInput;
    alert("Your ZAKAT  value is " + YourZakat);



// TASK-2


// var FamilyMember = prompt("Please Enter the total number of Family");


// var fitrahMethod = prompt("Please choose the method"   +  "  1. wheat  2. Barley  3. Dates  4. Raisins" );

// var wheat = 250;
// var Barley = 450;
// var Dates = 2100;
// var Raisins = 2800;
// if(fitrahMethod == 'wheat' ){
//     alert("Your Fitrah value is "  + FamilyMember * wheat)
// }

// if(fitrahMethod == 'Barley'){
//     alert("Your Fitrah value is "  + FamilyMember * Barley)
// }
// if(fitrahMethod == 'Dates' ){
//     alert("Your Fitrah value is "  + FamilyMember * Dates)
// }
// if(fitrahMethod == 'Raisins'){
//     alert("Your Fitrah value is "  + FamilyMember * Raisins)
// }
// else{
//     alert(" Your Fitrah value is 0")
// }


// TASK-3

// var secretNumber = 7 ;

// var userGuess = prompt("Guess the secret number between 1 to 10");

// if(userGuess == secretNumber){
//     alert("Congratulations! You guessed the secret number")
// }
// else if (userGuess < secretNumber) {
//     alert("Sorry, Your guess is too low. Guess again.");
// }
// else{
//     alert("Sorry, Your guess is too high. Guess again.")
// }

// TASK-4

// var userName = prompt("Enter Your Name");

// var Name = userName.charAt(0).toUpperCase() + userName.slice(1);
// document.write(Name);

// TASK-5

// var contactNumbers = [];
// var contactNames = [];
// var numContacts = (prompt("How many contacts do you wanna add"));
// for (var a = 0; a < numContacts; a++) {
//   var userNumber = prompt("Enter the contact number:");
//   var userName = prompt("Enter the contact name:");
//   contactNumbers.push(userNumber);
//   contactNames.push(userName);
// }

// document.write("Contacts:  " );
// for (var a = 0; a < contactNumbers.length; a++  ) {
//   document.write(contactNumbers[a] + " - "  +  contactNames[a]) ;
// }

// TASK-6

// var products = ["Snakers", "KITKAT", "Mars", "DiaryMilk", "Hersheys" ,"Toblerone" ];

// var position = (prompt("Enter the position of the product that you wanna remove" ));


// var removedItem = products.splice(position -1, 1);


// document.write("Removed item:  "  +  removedItem);
// document.write(" <br><br>Remaining items:  " + products );


// document.write(" <br><br> Total number of items Remaining: " + products.length);

// TASK-7

// var nationality = prompt(' Please Enter Your Nationality');
// var gender = prompt('Please Enter Your Gender');
// var age = parseInt(prompt('Please Enter Your Age'));
// if (nationality == "Pakistani" || nationality == "Indian") {
//     if (gender == "Male" && age >= 18) {
//         alert("You are eligible to vote.");
//       } else if (gender == "Female" && age >= 18) {
//         var married = prompt("Are you married? (yes or no)");
//         if (married == "yes") {
//           alert("You are eligible to vote");
//         } else {
//           alert("You are not eligible to vote");
//         }
//       } else {
//         alert("You are not eligible to vote");
//       }   
// } 
// else  {
//   alert('You are not eligible to vote due to Nationality issue')
// }

// TASK-8

var WorldCupSquad = [
    'Babar Azam',
    'Shaheen Afridi',
    'Shoaib Malik',
    'Mohammad Hafeez',
    'Imam-ul-Haq',
    'Asif Ali',
    'Haris Sohail',
    'Sarfaraz Ahmed',
    'Mohammad Amir',
    'Hasan Ali',
    'Wahab Riaz',
    'Shadab Khan',
    'Imad Wasim',
    'Fakhar Zaman',
    'Abid Ali',
  ]
  
  var FinalTeam = WorldCupSquad.slice(0, 11)
  
  document.write('Final team players:<br>')
  for (var a = 0; a < FinalTeam.length; a++) {
    document.write( ' <br><br> ' , a + 1 + '  .' +  FinalTeam[a])
  }
  
  
