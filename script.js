let button = document.getElementById("try-atomai");
let body = document.documentElement;
let pythonBeginnerProjects = [
    "Create a basic program that prints 'Hello World' to the console, marking the starting point of your Python journey.",
    "Develop a simple calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
    "Design a number guessing game where the computer randomly selects a number, and the player has to guess it within a certain number of tries.",
    "Write a function that checks whether a given word or phrase is a palindrome, meaning it reads the same backward as forward.",
    "Implement the classic FizzBuzz problem where numbers are printed, but multiples of three are replaced with 'Fizz' and multiples of five with 'Buzz'.",
    "Create a Python script that calculates the factorial of a number, which is the product of all positive integers up to that number.",
    "Write a program to generate and print the Fibonacci sequence up to a specified number of terms, illustrating the famous sequence where each number is the sum of the two preceding ones.",
    "Build a random password generator that creates secure, random passwords based on user-defined criteria like length and complexity.",
    "Write a program that takes an input number and determines whether it is odd or even, using basic conditionals.",
    "Create a temperature converter that allows users to input a temperature in Celsius or Fahrenheit and convert it to the other unit.",
    "Develop a basic Rock Paper Scissors game where the user plays against the computer, which randomly selects an option from rock, paper, or scissors.",
    "Write a Python script that acts as a simple alarm clock, where the user can set a timer and be notified when the time is up.",
    "Simulate a dice roll by writing a program that randomly generates numbers between 1 and 6 to mimic rolling a pair of dice.",
    "Create a word count tool that reads a text file and returns the number of words, helping users analyze documents or articles.",
    "Design a command-line to-do list application where users can add, remove, and view tasks they need to complete.",
    "Write a countdown timer that counts down from a specified number of seconds and displays a message once the time has elapsed.",
    "Create a BMI (Body Mass Index) calculator that takes a user's weight and height as input and calculates their BMI based on these values.",
    "Develop a leap year checker that determines whether a given year is a leap year, accounting for special cases like century years.",
    "Write a program that calculates simple interest based on user input for the principal, rate, and time period of an investment.",
    "Build an area calculator that allows users to calculate the area of basic geometric shapes such as circles, squares, and triangles."
];
let pythonIntermediateProjects = [
    "Develop a Tic-Tac-Toe game where two players can take turns placing their markers on a grid, and the program checks for a winner or a draw at the end of each game.",
    "Build a Hangman game where the computer randomly selects a word, and the player has to guess letters until they figure out the word or run out of attempts.",
    "Create a URL shortener that takes long URLs and converts them into shorter, more manageable links, either by using an API or custom logic to generate shortened URLs.",
    "Write a Python script that organizes files in a specified directory by grouping them into folders based on their file types, such as images, documents, and videos.",
    "Develop a weather application that fetches current weather data for a user-specified location, using an API to retrieve real-time weather information such as temperature, humidity, and forecasts.",
    "Create a web scraper that retrieves and displays specific data from a website, such as article titles, prices of products, or user reviews, by navigating the website's HTML structure.",
    "Write a PDF to text converter that extracts text from a PDF file and saves it as plain text, allowing users to convert documents for easier editing and analysis.",
    "Design a basic text editor with a graphical user interface (GUI) that allows users to write, save, and edit text files within the program.",
    "Build a movie recommendation system that suggests movies to the user based on their input preferences, using a predefined dataset of movies and genres.",
    "Create an email slicer that takes an email address as input and extracts the username and domain, helping users parse and manipulate email addresses easily.",
    "Develop a random quote generator that selects a quote from a collection and displays it each time the program is run, providing users with fresh quotes on demand.",
    "Create a currency converter that converts between different currencies based on real-time exchange rates retrieved from a currency conversion API.",
    "Write a Python script that converts Markdown syntax into HTML, making it easy to turn simple Markdown files into properly formatted HTML web pages.",
    "Develop a command-line flashcard application where users can input terms and definitions, then review them in random order to aid in learning and memorization.",
    "Build an image resizer that allows users to resize multiple images in a folder by specifying new dimensions, automatically adjusting the images to the desired size.",
    "Write a simple web crawler that navigates a website, extracts specific data, and stores it for further analysis, following links and recursively visiting other pages on the site.",
    "Create a quiz application with multiple-choice questions that presents questions to the user and gives feedback on their answers, along with a final score at the end of the quiz.",
    "Design a stopwatch program that includes start, stop, and reset functionalities, allowing users to measure elapsed time during various activities or tasks.",
    "Build a Pomodoro timer that follows the Pomodoro technique, where users can set work and break intervals to enhance productivity with regular breaks.",
    "Create a PDF merger tool that combines multiple PDF files into a single document, allowing users to easily merge reports, forms, or presentations.",
    "Write a bulk file renamer that allows users to rename multiple files in a directory according to a specified naming convention, saving time when dealing with large numbers of files.",
    "Develop a Caesar Cipher encoder and decoder, where the user can input a message and shift value, and the program will encode or decode the message using this ancient cipher technique.",
    "Create a simple chatbot that can answer basic questions using predefined responses, giving users the impression of chatting with an automated system.",
    "Build a basic data visualizer that allows users to create bar charts, pie charts, and line graphs using Matplotlib, making it easier to visualize numerical data from datasets.",
    "Design a simple personal portfolio website using a Python web framework like Flask or Django, where users can showcase their projects, skills, and contact information.",
    "Create a unit converter that can convert between different units of measurement, such as length, weight, temperature, and volume, making it easier for users to handle conversions.",
    "Write a program that implements binary search, a fast algorithm that searches for an item in a sorted list by repeatedly dividing the search interval in half.",
    "Build a Twitter bot that automatically tweets content at regular intervals, interacts with users, or performs tasks like retweeting and liking posts based on specific criteria.",
    "Create an Instagram photo downloader that allows users to download photos from specific Instagram accounts by providing the username or photo link.",
    "Develop a random password validator that checks whether a generated password meets certain criteria, such as minimum length, inclusion of special characters, and uppercase letters.",
    "Write a video downloader tool that allows users to download videos from websites like YouTube by providing the video URL, offering options for video quality and format.",
    "Implement an API rate limiter that limits the number of API requests a user can make within a certain timeframe, preventing abuse and ensuring fair usage.",
    "Build a text-based adventure game where the player navigates a fictional world by typing commands, encountering challenges and making decisions that affect the outcome of the game.",
    "Create an HTTP request logger that listens for incoming HTTP requests and logs relevant information like the request method, URL, and timestamp for debugging or analysis.",
    "Design a simple URL shortener service that takes long URLs and returns shortened"
];

let pythonAdvancedProjects = [
    "Develop a machine learning model to predict house prices based on a dataset of housing features, utilizing libraries such as scikit-learn for data processing and model training.",
    "Create a web application with a user authentication system that allows users to sign up, log in, and manage their accounts, using a framework like Django or Flask.",
    "Build a real-time chat application with WebSocket support, where users can communicate instantly in a chat room, leveraging technologies like Flask-SocketIO or Django Channels.",
    "Write a program that performs natural language processing (NLP) tasks, such as sentiment analysis or text classification, using libraries like NLTK or spaCy.",
    "Develop a data visualization dashboard that connects to a database and displays interactive charts and graphs, enabling users to explore and analyze data visually.",
    "Create a RESTful API that allows clients to interact with a service, handling requests and responses in a standardized format, using frameworks like Flask-RESTful or Django REST framework.",
    "Build a personal finance tracker application that allows users to input their income and expenses, categorize transactions, and generate reports or visualizations.",
    "Develop a recommendation engine that suggests products, movies, or content based on user preferences and historical data, using collaborative filtering or content-based approaches.",
    "Create an automated web testing tool that interacts with web pages and performs actions or verifies content, using tools like Selenium or Pytest for testing.",
    "Write a program that integrates with a cloud storage service, allowing users to upload, download, and manage files in their cloud account, using APIs like AWS S3 or Google Cloud Storage.",
    "Develop a facial recognition system that identifies and verifies individuals in images or videos, using libraries like OpenCV or Dlib.",
    "Create a financial trading bot that executes trades based on predefined strategies or algorithms, integrating with stock market APIs for real-time trading data.",
    "Build an intelligent personal assistant that can perform tasks such as setting reminders, sending emails, or retrieving information using natural language processing and APIs.",
    "Design a complex web scraper that collects and analyzes data from multiple sources, including handling dynamic content and overcoming obstacles like CAPTCHAs.",
    "Develop a game engine for creating 2D or 3D games, allowing users to design, build, and test games with features like physics, rendering, and collision detection.",
    "Create a deep learning model for image classification or object detection, leveraging frameworks like TensorFlow or PyTorch for training and evaluating the model.",
    "Write a blockchain-based application that implements basic blockchain functionality, such as creating and verifying transactions, and managing a distributed ledger.",
    "Build a real-time analytics system that processes and visualizes streaming data from various sources, using tools like Apache Kafka or Apache Spark.",
    "Create a voice-controlled application that interprets and responds to spoken commands, integrating with speech recognition libraries like SpeechRecognition or Google Speech API.",
    "Develop a simulation or modeling tool for complex systems, such as traffic flow, population dynamics, or economic models, using numerical methods and data visualization techniques."
];

// JavaScript Beginner Projects
let javascriptBeginnerProjects = [
    "Create a basic JavaScript program that prints 'Hello, World!' to the console, which serves as an introduction to the language.",
    "Build a simple calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division.",
    "Design a number guessing game where the computer randomly selects a number, and the player has to guess it within a limited number of tries.",
    "Write a JavaScript function that checks whether a given string is a palindrome, meaning it reads the same forward and backward.",
    "Implement the classic FizzBuzz problem where numbers from 1 to 100 are printed, but multiples of 3 are replaced with 'Fizz' and multiples of 5 with 'Buzz'.",
    "Create a JavaScript program that calculates the factorial of a number, which is the product of all positive integers up to that number.",
    "Write a function that generates and prints the Fibonacci sequence up to a specified number of terms, illustrating the sequence where each number is the sum of the two preceding ones.",
    "Build a random password generator that creates secure, random passwords based on user-defined criteria like length and complexity.",
    "Create a temperature converter that allows users to input a temperature in Celsius or Fahrenheit and convert it to the other unit.",
    "Develop a basic Rock Paper Scissors game where the user plays against the computer, which randomly selects an option from rock, paper, or scissors."
];

// JavaScript Intermediate Projects
let javascriptIntermediateProjects = [
    "Develop a Tic-Tac-Toe game where two players can take turns placing their markers on a grid, and the program checks for a winner or a draw at the end of each game.",
    "Create a simple to-do list application where users can add, remove, and edit tasks, and mark tasks as completed.",
    "Build a weather application that fetches current weather data for a user-specified location using an API and displays information like temperature and conditions.",
    "Design a URL shortener that converts long URLs into shorter, more manageable links using custom logic or a URL shortening API.",
    "Create a basic to-do list app that allows users to add, delete, and edit tasks, and save the list to local storage.",
    "Write a JavaScript function that validates a user’s email address to ensure it follows a standard email format.",
    "Develop a quiz application with multiple-choice questions that presents questions to the user and provides feedback on their answers, along with a final score at the end of the quiz.",
    "Build a simple image slider that cycles through a set of images with next and previous buttons, allowing users to navigate through the gallery.",
    "Create a basic expense tracker where users can input their income and expenses, categorize transactions, and view a summary of their financial status.",
    "Design a countdown timer that counts down from a specified number of seconds and displays a message once the time has elapsed."
];

// JavaScript Advanced Projects
let javascriptAdvancedProjects = [
    "Develop a real-time chat application where users can communicate instantly in a chat room, using WebSocket or a similar technology for real-time messaging.",
    "Create a task management application with user authentication, allowing users to sign up, log in, and manage their tasks with features such as due dates and priorities.",
    "Build a personal finance tracker that connects to a financial API, allowing users to track their income, expenses, and budget with interactive charts and graphs.",
    "Design a complex web scraper that collects data from multiple pages of a website, handles pagination, and exports the collected data to a CSV file or database.",
    "Implement a RESTful API that allows clients to perform CRUD operations (Create, Read, Update, Delete) on resources, using Node.js and Express for server-side functionality.",
    "Create a data visualization dashboard that connects to a database, retrieves data, and displays interactive charts and graphs using libraries like D3.js or Chart.js.",
    "Build a custom JavaScript library or framework that simplifies a common task or problem, demonstrating an understanding of JavaScript design patterns and best practices.",
    "Develop a progressive web application (PWA) that works offline, caches resources, and provides a native-app-like experience with features like push notifications.",
    "Create an advanced game with complex mechanics, such as a 2D platformer or a strategy game, using a game development framework like Phaser.js.",
    "Write a machine learning model that performs tasks like classification or regression using JavaScript libraries such as TensorFlow.js or Brain.js."
];


let resultText = document.getElementById("codeResult");
let codingLevel = document.getElementById("coding-level");  
let codingLanguage = document.getElementById("coding-language"); 
let codeResultButton = document.getElementById("codeResultButton");
let generatingText = document.getElementById("generating-text");
let resetButton = document.getElementById("reset-button");
let searcButton = document.getElementById("search-button");

function loaderFunction() {
    generatingText.style.display = "block"; // Show the loader
    resultText.style.color = "#2c2e31";     // Hide the result text
}

// Function to hide the loader and display the result text
function displayResult() {
    generatingText.style.display = "none"; // Hide the loader
    resultText.style.color = "#646669";    // Show the result text
}

// Function to select a random project
function functionPythonBeginnerProjects() {
    loaderFunction(); // Show loader immediately

    setTimeout(() => {
        // Logic to generate the result text after the loader

        if (codingLanguage.value === "Python") {
            if (codingLevel.value === "Beginner") {
                body.style.backgroundColor = "";
                resultText.innerText = pythonBeginnerProjects[Math.floor(Math.random() * pythonBeginnerProjects.length)];
            } else if (codingLevel.value === "Intermediate") {
                body.style.backgroundColor = "";
                resultText.innerText = pythonIntermediateProjects[Math.floor(Math.random() * pythonIntermediateProjects.length)];
            } else if (codingLevel.value === "Advanced") {
                body.style.backgroundColor = "";
                resultText.innerText = pythonAdvancedProjects[Math.floor(Math.random() * pythonAdvancedProjects.length)];
            }
        } else if (codingLanguage.value === "Javascript") {
            if (codingLevel.value === "Beginner") {
                body.style.backgroundColor = "";
                resultText.innerText = javascriptBeginnerProjects[Math.floor(Math.random() * javascriptBeginnerProjects.length)];
            } else if (codingLevel.value === "Intermediate") {
                body.style.backgroundColor = "";
                resultText.innerText = javascriptIntermediateProjects[Math.floor(Math.random() * javascriptIntermediateProjects.length)];
            } else if (codingLevel.value === "Advanced") {
                body.style.backgroundColor = "";
                resultText.innerText = javascriptAdvancedProjects[Math.floor(Math.random() * javascriptAdvancedProjects.length)];
            }
            
        }

        // Hide the loader and display the result
        displayResult();
    }, 2000); // Set a 3-second delay for the loader
    resetButton.style.backgroundColor = "#ccac38";
    resetButton.style.boxShadow= "0 0 30px #ccac38";
    resetButton.style.cursor = "pointer";
    searcButton.style.backgroundColor = "#ccac38";
    searcButton.style.boxShadow= "0 0 30px #ccac38";
    searcButton.style.cursor = "pointer";


}


function codeResultButtonFunction() {
if (codingLanguage.value == "Select" || codingLevel.value == "Select") {
    codeResultButton.style.backgroundColor = "#646669";
    codeResultButton.style.boxShadow = "none";
    codeResultButton.style.cursor = "not-allowed";
}
else {
    codeResultButton.style.backgroundColor = "#ccac38";
    codeResultButton.style.boxShadow= "0 0 30px #ccac38";
    codeResultButton.style.cursor = "pointer";
}
}

body.onmouseover = codeResultButtonFunction;


// Scroll function
function scroll() {
    body.scrollTop = 908;
}

function searchWithGoogle() {
    let searchUrl = `https://www.google.com/search?q=${resultText.innerText}`;
    window.open(searchUrl, "_blank");
    }

searcButton.onclick = searchWithGoogle;

// Event listeners for the buttons
button.onclick = scroll;
codeResultButton.onclick = functionPythonBeginnerProjects;

