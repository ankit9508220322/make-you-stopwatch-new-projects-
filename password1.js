let Slider = document.getElementById("input");
let slider = document.getElementById("slider");
let passBox = document.getElementById("passBox");
let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let digit = document.getElementById("digit");
let symbol = document.getElementById("symbol");
let getBtn = document.getElementById("getBtn");
let copy = document.getElementById("copy");

//showing the input slider increase and decrease value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
  sliderValue.textContent = inputSlider.value;
});

getBtn.addEventListener('click',()=>{
  passBox.value = generatePassword();
})
let upperCaseChart= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseChart = "abcdefghijklmnopqrstuvwxyz"
let digitChart = "0123456789";
let symbolChart = ",./@&%$#";

function generatePassword(){
  let genPassword = "";
  let allChars = "";

  allChars += upperCase.checked ? upperCaseChart:"";
  allChars += symbol.checked ? symbolChart:"";
  allChars += digit.checked ? digitChart:"";
  allChars += lowerCase.checked ? lowerCaseChart:"";

  if(allChars == "" || allChars.length == 0){
    return genPassword;
  }
  let i = 1;
  while(i <= inputSlider.value){
  genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
  i++;
  }
  return genPassword;
}
copy.addEventListener('click',()=>{
  navigator.clipboard.writeText(passBox.value); 
  
})
