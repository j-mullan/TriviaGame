/* 
  Trivia Game JavaScript
*/
//

//Do I need to set Game to zero?
// Variables
var wrongAnswer = []
var correctAnswer = [];
// Long Ass Question Array
var myQuestions = [
  {
    question: "Which is the capital of New Jersey?",
    answers: {
      a: "Medford",
      b: "Jersey City",
      c: "Trenton",
      d: "Lambertville",
    },
    correctAnswer: "c"
    },
  {
    question: "Which is the New Jersey state fish?",
     answers: {
      a: "Chained Pickerel",
      b: "Brook Trout",
      c: "Black Crappie",
      d: "Yellow Perch",
    },
    correctAnswer: "b"
    },
  {
    question: "Does New Jersey have any natural Lakes?",
    answers: {
      a: "No",
      b: "Yes",
      c: "Only Lake Superior",
      d: "It used to, but not currently",
    },
    correctAnswer: "a"
  },
  {
    question: "Are the Pine Barrens beautiful in the Fall?",
    answers: {
      a: "Yes!",
      b: "Absolultey!",
      c: "Even more so when on Fire, but Raining!"
    }, // How to make all answers Correct?    
    correctAnswer: "a,b,c",
  },
]


