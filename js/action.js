(function() {
    function buildQuiz() {
      
      const output = [];
  
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
      
        const answers = [];
  
               for (letter in currentQuestion.answers) {
          
          answers.push(
            `<label  style="display:block;">
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
      
        output.push(
          `<div class="question" style=" font-size: 20px;
          background: #929191;
          color: #fff;
          display: block;
          padding FONT-WEIGHT: 100;
          padding-left: 20px; border: 1px black solid; border-radius: 10px"> ${currentQuestion.question} </div>
          <div class="answers" style="
          background:#fff;
          padding: 10px; margin-bottom:10px; border: 1px black solid ; border-radius: 10px; margin-top:10px"> ${answers.join('')} </div>`
        );
      });
  
            quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      
      const answerContainers = quizContainer.querySelectorAll(".answers");
      let numCorrect = 0;
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          answerContainers[questionNumber].style = "background: #74ef74; padding: 10px; margin-bottom:10px; border: 1px black solid ";
        } else {
          answerContainers[questionNumber].style= "background : #f32121;padding: 10px; margin-bottom: 10px; border: 1px black solid; border-radius:10px; margin-top:10px";
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("qizz");
    const resultsContainer = document.getElementById("answers");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "what creates a dropdown list events?",
        answers: {
          a: "Choice",
          b: "Checkbox",
          c: "Textbox",
          d: "Textcomponent"
        },
        correctAnswer: "a"
      },
      {
        question: "Which of the following is a scripting language?",
        answers: {
          a: "C",
          b: "C++",
          c: "Javascript",
          d: "Java"
        },
        correctAnswer: "c"
      },
      {
        question: "For creating Applet we can use this class in swing?",
        answers: {
          a: "Jframe",
          b: "Applet",
          c: "Jawt",
          d: "Japplet"
        },
        correctAnswer: "d"
      },
      {
        question: "The following pacakage is required for swing?",
        answers: {
          a: "javax.swing",
          b: "java.util",
          c: "java.applet",
          d: "none of these"
        },
        correctAnswer: "a"
      },
      {
        question: "National bird of India is?",
        answers: {
          a: "Sparrow",
          b: "Popat",
          c: "Peacock",
          d: "Hiran"
        },
        correctAnswer: "c"
      },
      {
        question: "National animal of India is?",
        answers: {
          a: "Tiger",
          b: "Lion",
          c: "Dog",
          d: "kangaroo"
        },
        correctAnswer: "a"
      },
      {
        question: "The captial of India is?",
        answers: {
          a: "Mumbai",
          b: "Rajasthan",
          c: "Kolkata",
          d: "Delhi"
        },
        correctAnswer: "d"
      }
      
    ];
  
    
    buildQuiz();
  
    
    submitButton.addEventListener("click", showResults);

  })();
