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
                    <h5>question'</h5>
                </div>
                <div style="padding:24px">
                    <div class="card mb-2">
                        <div class="card-body">
                            Antwort
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Antwort
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Antwort
                        </div>
                    </div>
                    <div class="card mb-2">
                        <div class="card-body">
                            Antwort
                        </div>
                    </div>
                </div>

                <div class="space-between p-2">
                    <div class="d-flex p-2 bd-highlight">
                        <span><b>1</b> von <b>5</b> Frage</span>
                    </div>
                    <button type="button" class="btn btn-primary">Next Question</button>
                </div>
            </div>
    `
}

// function init(){
//     let quizCtn = document.getElementById('quizCtn');
//     quizCtn.innerHTML = returnQuizCtn();
// }

// function startQuiz(){
//     let quizz = document.getElementById('quizz');
//     quizz.classList.remove('card-body-bg');
//     quizz.classList.add('card-body-bg-color');
//     quizz.innerHTML = returnQuizz();
// }