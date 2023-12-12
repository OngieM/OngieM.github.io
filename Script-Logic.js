const quizData = [
 { questionText: "If all Bloops are Razzies and some Razzies are Lazzies, can we conclude that sme Bloops are definitely Lazzies?", options: ["Yes", "No", "Not enough information", "All Bloops are Lazzies"], correctAnswer: "Not enough information", category: "Logic" },
 {questionText:"If every member of a family of four has a different hobby (reading, painting, hiking and cooking), and John is the painter, who is the hiker?", options:["Mary", "David", "John", "David"], correctAnswer: "Mary", category: "Logic"},
 {questionText:"Complete the series: 2,6,12,20,...", options:["26", "28", "30", "3228"], correctAnswer: "", category: "Logic"},
 {questionText:"If a shirt costs R20 after a 25% discount, what was its original price?", options:["R22", "R24", "R25", "R26.67"], correctAnswer: "R25", category: "Logic"},
 {questionText:"Which of the following is the odd one out?", options:["Square", "Circle", "Rectangle", "Triangle"], correctAnswer: "Circle", category: "Logic"},
 { questionText: "Five friends, John, Mary, Peter, Sarah, and Tom are sitting in a row. If Peter is not next to Sarah, who could be sitting in the middle?", options: ["John", "Mary", "Tom", "Peter"], correctAnswer: "Mary", category: "Logic" },
 { questionText: "If the word 'ZEBRA' is written as 'AZERB', how is 'TIGER' written?", options: ["GERIT", "IGRET", "RIGET", "ETRIG"], correctAnswer: "IGRET", category: "Logic" },
 { questionText: "In a deck of cards, if a king is worth 10 points, a queen is worth 5 points, and a jack is worth 2 points, what is the total value of a deck of 52 cards?", options: ["260", "520", "1040", "2080"], correctAnswer: "1040", category: "Logic" },
 { questionText: "If John is twice as old as Mary and Mary is 10 years old, how old is John?", options: ["15", "20", "25", "30"], correctAnswer: "20", category: "Logic" },
{ questionText: "If the pattern is: 2, 5, 10, 17, what is the next number?", options: ["24", "26", "29", "32"], correctAnswer: "24", category: "Logic" },
{ questionText: "A clock shows 3:00. What is the angle between the hour and minute hands?", options: ["90 degrees", "120 degrees", "135 degrees", "180 degrees"], correctAnswer: "90 degrees", category: "Logic" },
{ questionText: "If the pattern is: 1, 4, 9, 16, what is the next number?", options: ["20", "25", "30", "36"], correctAnswer: "25", category: "Logic" }

 // Add more questions...
];

const maxQuestions = 10; //Set the maximum number of questions

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the quizData array before starting the quiz
shuffleArray(quizData);

let currentQuestionIndex = 0;
let totalScore = 0;

// Function to handle the user's answer
function checkAnswer(selectedOption) {
    const userAnswer = document.getElementById(selectedOption).innerText;
    const currentQuestion = quizData[currentQuestionIndex];

    // Check if the user's answer is correct
    const isCorrect = userAnswer === currentQuestion.correctAnswer;

    // Change button color based on correctness
    document.getElementById(selectedOption).style.backgroundColor = isCorrect ? 'green' : 'red';

    // Update total score if the answer is correct
    if (isCorrect) {
        totalScore += 10;
        console.log('Correct! Total Score:', totalScore);
    } else {
        console.log('Incorrect. Total Score:', totalScore);
    }

    // Move to the next question after a brief delay (you can adjust the delay)
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < maxQuestions) {
            loadQuestion();
        } else {
            // User has answered the 10th question, redirect to the score page
            console.log('Quiz completed. Redirecting to Score Page. Total Score:', totalScore);
            displayScorePage();
        }
    }, 1000); // Delay in milliseconds (1 second in this example)
}


function displayScorePage() {
    console.log('Total Score:', totalScore);
    // Pass the totalScore as a query parameter to the score page URL
    window.location.href = `file:///E:/Quiz_App/Templates/Score.html?score=${totalScore}`;
}




function loadQuestion() {
    const questionDiv = document.getElementById("questionDiv");
    const option1 = document.getElementById("option-1");
    const option2 = document.getElementById("option-2");
    const option3 = document.getElementById("option-3");
    const option4 = document.getElementById("option-4");

    // Reset button colors
    option1.style.backgroundColor = '';
    option2.style.backgroundColor = '';
    option3.style.backgroundColor = '';
    option4.style.backgroundColor = '';

    // Check if there are more questions to display
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];

        // Display the question text
        questionDiv.innerText = currentQuestion.questionText;

        // Display answer options
        option1.innerText = currentQuestion.options[0];
        option2.innerText = currentQuestion.options[1];
        option3.innerText = currentQuestion.options[2];
        option4.innerText = currentQuestion.options[3];
    } else {
        // User has answered the 10th question, redirect to the score page
        window.location.href = 'file:///E:/Quiz_App/Templates/Score.html';
    }
}


function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressPercentage = (currentQuestionIndex + 1) / quizData.length * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
  

// Call this function to load the first question
loadQuestion();