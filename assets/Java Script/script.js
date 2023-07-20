// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){
    //users inputs
    let length; do {length = parseInt(prompt("Please enter the length you'd like your password to be (between 8-128 characters):"));
    if (isNaN(length)|| length < 8 || length > 128){
      alert("Invalid Input! Please enter a number between 8 and 128 only!")
    }
    } while (isNaN(length) || length < 8 || length > 128);
    const numbers = confirm("Did you want to include numbers in your password?");
    const specials = confirm ("Did you want to include special characters in your password?");
    const capitals = confirm ("And finally, would you like to include capital letters in your password?");

    //character set options
    const lowerset = "abcdefghijklmnopqrstuvwxyz";
    const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const speicalset= "!@#$%^&*()_-+=<>?/{}~";
    const numberset = "123456789";

    //combine character sets based on user input
    let characterSet = lowerset;
    if (numbers) characterSet += numberset;
    if(specials) characterSet+= speicalset;
    if (capitals) characterSet+= upperset;
    

    // password generation
    let passwordgen= "";
    for(let i=0; i < length; i++){
      const randomIndex= Math.floor(Math.random() * characterSet.length);
      passwordgen += characterSet[randomIndex];
     }
    return passwordgen;
    }

  
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




