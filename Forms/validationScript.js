// JavaScript code for form validation

let form = document.getElementById("myForm"); 
let inputField = document.getElementById("inputField"); // Retrieve the input field value
let inputRegex = /^[a-zA-Z0-9]+$/; // Regular expression pattern for alphanumeric input

form.addEventListener("submit", function(event){
  event.preventDefault(); // Prevent form from submitting
 
  if (inputRegex.test(inputField.value)){ // Check if the input value matches the pattern
    
    // Valid input: display confirmation and submit the form
    alert("Valid Input");
    form.submit();

  } else {
   
    alert("Invalid Input"); // Invalid input: display error message
  
  }
});