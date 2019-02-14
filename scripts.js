//Define global variables

//Creating the question array
let questionArray = [
    //Question 1

    {
        questionText: 'What city hosted the 2012 summer Olympic games?',
        questionChoices: ['Rio de Janeiro', 'London', 'Sydney', 'Beijing'],
        questionCorrectChoice: 1,
        correctDetails: 'London'
    },

    //Question 2

    {
        questionText: 'Which US president does not have his face carved on Mount Rushmore?',
        questionChoices: [' George Washington', 'Thomas Jefferson', 'Franklin Delano Roosevelt', 'Abraham Lincoln'],
        questionCorrectChoice: 2,
        correctDetails: ' Franklin Delano Roosevelt is not on Mount Rushmore. It is actually Theodore Roosevelt.'
    },

    //Question 3
    {
        questionText: ' As of fall 2016, approximately how many bison lived in Yellowstone National Park?',
        questionChoices: ['1000', '3000', '5000', '7000'],
        questionCorrectChoice: 2,
        correctDetails: '5000’'
    },

    //Question 4
    {
        questionText: ' In what Italian city is the Trevi Fountain located?',
        questionChoices: ['Florence', 'Milan', 'Rome', 'Venice'],
        questionCorrectChoice: 2,
        correctDetails: 'Rome'
    },

    //Question 5
    {
        questionText: 'How long is the Great Wall of China?',
        questionChoices: ['10,230 miles', '11,770 miles', '13,170 miles', '14,540 miles'],
        questionCorrectChoice: 2,
        correctDetails: '13,170 miles'
    },


    //Question 6
    {
        questionText: 'How high is the highest sand dune in Great Sand Dunes National Park?',
        questionChoices: ['600 feet', '650 feet', '700 feet', '750 feet'],
        questionCorrectChoice: 3,
        correctDetails: '750 feet'
    },

    //Question 7
    {
        questionText: 'What civilization is connected to the citadel of Macchu Picchu?',
        questionChoices: ['Aztec', 'Mayan', 'Naxca', 'Inca'],
        questionCorrectChoice: 3,
        correctDetails: 'Inca'
    },

    //Question 8
    {
        questionText: 'How many islands of the Republic of Fiji are inhabited?',
        questionChoices: ['97', '110', '332', '478'],
        questionCorrectChoice: 1,
        correctDetails: '110'
    },

    //Question 9
    {
        questionText: 'What is the Melbourne Cup?',
        questionChoices: ['A popular bar in Australia', 'A horse race', 'A piece of Aboriginal art', 'A tribute to the monarchy'],
        questionCorrectChoice: 1,
        correctDetails: 'A horse race'
    },

    //Question 10
    {
        questionText: 'How many national parks are there in the US?',
        questionChoices: ['48', '58', '68', '78'],
        questionCorrectChoice: 1,
        correctDetails: '58'
    }
];



//Create the variables for question number and correct //answers.
let questionNum = 1;
let correctAns = 0;

//Defining functions
function nextQuestion() {
    let question = questionArray[questionNum - 1];
}

//Function to handle start button - displays questions
function startButton() {
    $('.start-button').click(function (event) {
        nextQuestion();
    });
}
startButton();

//Function to handle the submit button - iterate through //question set.
//use prevent default
//If answer is correct, display feedback, else display //correct answer.

//Using functions (triggers)
$(document).ready(function () {
    $('.quiz-section').hide();
    $('.results-section').hide();
    $('.start-section').hide();


});

$(document).on('click', '.start-button', function (event) {
    event.preventDefault();
    $('.quiz-section').show();
    $('.results-section').hide();
    $('.start-section').hide();
});

$(document).submit('.choices', function (event) {
    event.preventDefault();
    $('.quiz-section').hide();
    $('.results-section').show();
    $('.start-section').hide();

});

$(document).on('click', '#tryagain', function (event) {
    event.preventDefault();
    $('.quiz-section').hide();
    $('.results-section').hide();
    $('.start-section').show();
});
