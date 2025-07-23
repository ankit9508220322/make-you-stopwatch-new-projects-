const question = [
  {
    question:"are yuo know is national birds  in this country",
    answer:[
      {Text: "crow",correct:false},
      {Text: "peacock",correct:true},
      {Text: "eagle",correct:false},
      {Text: "sparrow",correct:false},
    ]
    
  },
  {
    question:"ver small digit in counter",
    answer:[
      {Text: "00.22",correct:false},
      {Text: "99999",correct:true},
      {Text: "1234",correct:false},
      {Text: "3333",correct:false},
    ]
  },
  {
    question:" chose the correct meaning  of adorable",
    answer:[
      {Text: "adorable",correct:true},
      {Text: "beautiful",correct:false},
      {Text: "very pretty",correct:false},
      {Text: "non of these",correct:false},
    ]
  },
  {
    question:" chose the correct atomic  number gold",
    answer:[
      {digit: "78",correct:false},
      {digit: "79",correct:true},
      {digit: "44",correct:false},
      {digit: "70",correct:false},
    ]
  },
  {
    question:" chose the correct atomic number holmium",
    answer:[
      {digit: "33",correct:false},
      {digit: "76",correct:false},
      {digit: "67",correct:true},
      {digit: "68",correct:false},
    ]
  }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "neat"
  shoeQuestion();
}

function shoeQuestion(){

  resetStart();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." +currentQuestion.question;

  //SHOW THE ANSWER 
  currentQuestion.answer.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer)
  });

}
function resetStart(){
  nextButton.style.display = "none"
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }
}
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  //click the options and correct the answer  show function
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextButton.style.display = "block"
}
  
function showScore(){
  resetStart();
  questionElement.innerHTML = `you scored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "play Again";
  nextButton.style.display = "block"
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex< question.length){
    shoeQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < question.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();