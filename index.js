// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");


// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    document.body.classList.toggle("dark-mode");
    // Write your code to manipulate the DOM here

}
themeButton.addEventListener("click", toggleDarkMode);


const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add("error");
    } else {
      petitionInputs[i].classList.remove("error");
    }
  }
 
   if (containsErrors == false) {
    addSignature();

    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }

    containsErrors = false;
  }
}

  
let signNowButton = document.getElementById("sign-now-button");
const addSignature = () => {
    // Write your code to manipulate the DOM here
  var name = document.getElementById("fname").value;
  var email = document.getElementById("lname").value;
  var htown= document.getElementById("Htown").value;
  
  //Create a var for userdata can be const or let 
  const userdata = document.createElement("p");
  userdata.innerHTML = "🖊️ " + name + " from " + htown + " " + "supports this."
  
  //create another var to connect to the div of class signatures
  const newSignature = document.querySelector('.signatures');
  //then appendChild(userdata)
newSignature.appendChild(userdata);

}
signNowButton.addEventListener('click', validateForm);

  // TODO: Validate the value of each input
  // TODO: Call addSignature() and clear fields if no errors





