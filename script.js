function returnQuiz(){
    return `
    <div class="card">
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

            <div class="card-body">
                <div class="card-title">
                    <div>
                        <h5 class="card-title">Welcome to <br> the Awesome HTML Quiz</h5>
                        <p class="card-text">Ready for the Challenge?</p>
                    </div>
                </div>
                <div class="button_ctn">
                    <button>START NOW</button>
                </div>
            </div>
        </div>
    `
}

function init(){
    let quizCtn = document.getElementById('quizCtn');
    quizCtn.innerHTML = returnQuiz();
}