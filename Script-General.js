const quizData = [
    { questionText: "What is the capital of France?", options: ["Paris", "Berlin", "London", "Madrid"], correctAnswer: "Paris", category: "General" },
    { questionText: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correctAnswer: "William Shakespeare", category: "General" },
    { questionText: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars", category: "General" },
    { questionText: "In which year did the Titanic sink?", options: ["1905", "1912", "1920", "1931"], correctAnswer: "1912", category: "General" },
    { questionText: "What is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correctAnswer: "Blue Whale", category: "General" },
    { questionText: "What is the largest desert in the world?", options: ["Gobi Desert", "Sahara Desert", "Antarctica", "Arabian Desert"], correctAnswer: "Antarctica", category: "General" },
    { questionText: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correctAnswer: "Leonardo da Vinci", category: "General" },
    { questionText: "What is the currency of Brazil?", options: ["Peso", "Dollar", "Real", "Euro"], correctAnswer: "Real", category: "General" },
    { questionText: "Which element has the chemical symbol 'O'?", options: ["Osmium", "Oxygen", "Oganesson", "Gold"], correctAnswer: "Oxygen", category: "General" },
    { questionText: "What is the main ingredient in guacamole?", options: ["Tomato", "Onion", "Avocado", "Cilantro"], correctAnswer: "Avocado", category: "General" },
    { questionText: "Who is known as the 'Father of Computer Science'?", options: ["Alan Turing", "Bill Gates", "Steve Jobs", "Ada Lovelace"], correctAnswer: "Alan Turing", category: "General" },
    { questionText: "Which mountain is the tallest in the world?", options: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Fuji"], correctAnswer: "Mount Everest", category: "General" },
    { questionText: "What is the capital city of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], correctAnswer: "Canberra", category: "General" },
    { questionText: "In which year did the Berlin Wall fall?", options: ["1985", "1989", "1991", "1995"], correctAnswer: "1989", category: "General" },
    { questionText: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Carbon Dioxide", category: "General" },
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