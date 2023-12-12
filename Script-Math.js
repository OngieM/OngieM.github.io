const quizData = [
 { questionText: "What is the result of 8 multiplied by 7?", options: ["45", "56", "64", "78"], correctAnswer: "56", category: "Math" },
 { questionText: "Solve the equation: 3x - 5 = 10", options: ["x=5", "x=3", "x=2", "x=6"], correctAnswer: "x=5", category: "Math" },
 { questionText: "What is the square root of 144?", options: ["12", "14", "10", "16"], correctAnswer: "12", category: "Math" },
 { questionText: "If a triangle has angles measuring 45 degrees, 45 degrees, and 90 degrees, what type of triangle is it?", options: ["Acute", "Right", "Obtuse", "Isosceles"], correctAnswer: "Right", category: "Math" },
 { questionText: "What is the value of pi to two decimal places?", options: ["3.14", "3.16", "3.12", "3.18"], correctAnswer: "3.14", category: "Math" },
 { questionText: "If a rectangle has a length of 8 units and a width of 5 units, what is its area?", options: ["35 square units", "40 square units", "45 square units", "50 square units"], correctAnswer: "40 square units", category: "Math" },
 { questionText: "Solve for x: 2x + 5 = 15", options: ["5", "7", "8", "10"], correctAnswer: "5", category: "Math" },
 { questionText: "What is the square root of 81?", options: ["9", "8", "7", "6"], correctAnswer: "9", category: "Math" },
 { questionText: "If a = 3 and b = 4, what is the value of a² + b²?", options: ["25", "32", "41", "48"], correctAnswer: "25", category: "Math" },
 { questionText: "Express the fraction 3/5 as a decimal.", options: ["0.4", "0.6", "0.8", "1.2"], correctAnswer: "0.6", category: "Math" },
 { questionText: "What is the perimeter of a square with sides of length 6 units?", options: ["18 units", "24 units", "30 units", "36 units"], correctAnswer: "24 units", category: "Math" },
 { questionText: "If the sum of two angles is 90° and one angle is 45°, what is the measure of the other angle?", options: ["30°", "45°", "60°", "90°"], correctAnswer: "45°", category: "Math" },
 { questionText: "Simplify the expression: 2(3x - 5) = 4x + 6", options: ["x = -8", "x = -6", "x = -4", "x = -2"], correctAnswer: "x = -4", category: "Math" },
 { questionText: "What is the value of 5! (5 factorial)?", options: ["120", "240", "360", "480"], correctAnswer: "120", category: "Math" },
 { questionText: "Find the solution to the inequality: 3x + 8 > 20", options: ["x > 4", "x > 6", "x > 8", "x > 10"], correctAnswer: "x > 4", category: "Math" },
 { questionText: "If the sum of the angles in a triangle is 180°, and two angles are 40° and 70°, what is the measure of the third angle?", options: ["50°", "70°", "80°", "90°"], correctAnswer: "70°", category: "Math" },


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
    window.location.href = `Score.html?score=${totalScore}`;
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
        window.location.href = 'file:///Score.html';
    }
}


function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressPercentage = (currentQuestionIndex + 1) / quizData.length * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
  

// Call this function to load the first question
loadQuestion();
