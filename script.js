let questions = [
    {
        "question":"What does HTML stand for?",
        "answer_1": " Hyper Text Markup Language",
        "answer_2": " Hyperlinks and Text Markup Language",
        "answer_3": " Home Tool Markup Language",
        "answer_4": " Hide The Math Like",
        "right_answer": 1
    },
    {
        "question":"Who is making the Web standards?",
        "answer_1": "Microsoft",
        "answer_2": "Mozilla",
        "answer_3": "The World Wide Web Consortium",
        "answer_4": "Google",
        "right_answer": 3
    },
    {
        "question":"What is the correct HTML element for inserting a line break?",
        "answer_1": '<xmp><break></xmp>',
        "answer_2": "<xmp><br></xmp>",
        "answer_3": "<xmp><b></xmp>",
        "answer_4": "<xmp><lb></xmp>",
        "right_answer": 2
    },
    {
        "question":"Which character is used to indicate an end tag?",
        "answer_1": "<",
        "answer_2": "^",
        "answer_3": "*",
        "answer_4": "/",
        "right_answer": 4
    },
    {
        "question":"Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        "answer_1": "longdesk",
        "answer_2": "alt",
        "answer_3": "src",
        "answer_4": "title",
        "right_answer": 2
    },
    {
        "question":"In HTML, which attribute is used to specify that an input field must be filled out?",
        "answer_1": "validate",
        "answer_2": "formvalidate",
        "answer_3": "placeholder",
        "answer_4": "required",
        "right_answer": 4
    },
    {
        "question":"Was ist eine mögliche Endung für eine HTML-Datei?",
        "answer_1": "*.ml",
        "answer_2": "*.web",
        "answer_3": "*.htm",
        "answer_4": "*.tml",
        "right_answer": 3
    },
    {
        "question":"What is the HTML element used to display an image?",
        "answer_1": "<xmp><img></xmp>",
        "answer_2": "<xmp><picture></xmp>",
        "answer_3": "<xmp><image></xmp>",
        "answer_4": "<xmp><pic></xmp>",
        "right_answer": 1
    },
    {
        "question":"How to write an HTML Comment ?",
        "answer_1": "<xmp>// This is an HTML comment</xmp>",
        "answer_2": "<xmp><!-- This is an HTML comment --></xmp>",
        "answer_3": "<xmp>/* This is an HTML comment */</xmp>",
        "answer_4": "<xmp>-/- This is an HTML comment -/-</xmp>",
        "right_answer": 2
    },
    {
        "question":"What is called an element that does not have a closing tag?",
        "answer_1": "Tag",
        "answer_2": "Empty Element",
        "answer_3": "Closed Element",
        "answer_4": "Broken Tag",
        "right_answer": 2
    },
    {
        "question":"Wer hat HTML erfunden?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Martin Luther King",
        "answer_3": "Harry Potter",
        "answer_4": "Bill Gates",
        "right_answer": 1
    }
];


function returnQuizCtn(){
    return `
    <div class="full-card">
            <div class="sidebar">
                <img src="img/logo.png" class="card-img-top">
                <div class="sidebar_list">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>Java</li>
                    </ul>
                </div>
            </div>

            <div id="quizz" class="card-body card-body-bg">
                <div class="start-card-title">
                    <div>
                        <h5 class="start-card-title">Welcome to <br> the Awesome Developer Quiz</h5>
                        <p class="card-text">Ready for the Challenge?</p>
                    </div>
                </div>
                <div class="button_ctn">
                    <button onclick= "startQuiz()">START NOW</button>
                </div>
            </div>
        </div>
    `
}

function returnQuizz(){
    return `
    <div class="column-space-between">
                <div class="card-title mt-3">
                    <h5 id="questionText"></h5>
                </div>
                <div style="padding:24px">
                    <div class="card mb-2" onclick="answer('answer_1')">
                        <div class="card-body" id="answer_1">
                            Antwort
                        </div>
                    </div>
                    <div class="card mb-2" onclick="answer('answer_2')">
                        <div class="card-body" id="answer_2">
                            Antwort
                        </div>
                    </div>
                    <div class="card mb-2" onclick="answer('answer_3')">
                        <div class="card-body" id="answer_3">
                            Antwort
                        </div>
                    </div>
                    <div class="card mb-2" onclick="answer('answer_4')">
                        <div class="card-body" id="answer_4">
                            Antwort
                        </div>
                    </div>
                </div>

                <div class="space-between p-2">
                    <div class="d-flex p-2 bd-highlight">
                        <span><b>1</b> von <b>${questions.length}</b> Frage</span>
                    </div>
                    <button onclick="nextQuestion()" id="nextButton" type="button" disabled class="btn btn-primary">Next Question</button>
                </div>
            </div>
    `
}



function returnResultCard(){
    return `
    <div class="card-body column-space-evenly">
    <div class="column">
        <img src="img/brain result.png" alt="">
        <span class="score-text">HTML QUIZ COMPLETED</span>
    </div>
        <div style="width: 40%;" class="space-between">
            <span style="color: #F28C3A;" class="score-text">YOUR SCORE</span>
            <span class="score-text">10/10</span>
        </div>
        <button style="width: 30%;" type="button" class="btn btn-primary rounded-3">SHARE</button>
    </div>
    `
}

let currentQuestion = 0;

function init(){
    let quizCtn = document.getElementById('quizCtn');
    quizCtn.innerHTML = returnQuizCtn();
}

function startQuiz(){
    let quizz = document.getElementById('quizz');
    quizz.classList.remove('card-body-bg');
    quizz.classList.add('card-body-bg-color');
    quizz.innerHTML = returnQuizz();
    showQuestion();
}

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showResult(){
    let quizz = document.getElementById('quizz');
    quizz.innerHTML = showResult();
}

function answer(selection){
    let question = questions[currentQuestion];
let selectedAnswerNumber = selection.slice(-1);


let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedAnswerNumber == question['right_answer']){
        document.getElementById(selection).parentNode.classList.add('success');
    }else{
        document.getElementById(selection).parentNode.classList.add('fail');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('success');
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion(){
    currentQuestion++;
    showQuestion();
}