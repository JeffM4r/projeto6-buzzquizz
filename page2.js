let awnsers = []

function openQuizz(selecionado) {
    document.querySelector(".page1").classList.add('page2');
    document.querySelector(".page2").classList.remove('page1');
    let container = document.querySelector(".page2");
    let id = Number (selecionado.querySelector(".quizz div p").innerText);
    let quizzBody = titleImg.find(data => data.id === id);
    console.log(quizzBody.questions);

    
    

    document.querySelector(".banner").innerHTML =
    `
    <h2 class="bannerText">${quizzBody.title}</h2>
    <div class="gradient"></div>
    <img src="${quizzBody.image}" class="bannerImg">
    `
    let banner = document.querySelector(".banner")
    banner.classList.remove("none")
    window.scrollTo(0, 0);
}

function shufleAnswers(){

}

function selecionarResposta(selecionado){

    selecionado.subling
}



function quizzResult(){
                `
                    <div class="finalquizzArea">
                        <div class="finalquizzHeader"><h3 class="finaltittlequiz">25% de Acerto: Para ser o chefe, você tem que vencer o chefe!</h3></div>
                        <div class="finalBody">
                            <div class="imgfinalquizzArea">
                                <img src="imgs/exemple.jpg" class="imgFinalQuizz">
                            </div>
                            <div class="finalquizzTextArea"><p class="finalquizzText">Você ainda não esta pronto para ser chefe, tem que começar a chefear bastante para ser chefe e chefiar como um chefe, meu chefe.</p></div>
                        </div>
                    </div> 

                    <div class="resetQuizz">
                        <p>Reiniciar Quizz</p>
                    </div>

                    <div class="backtoHome">
                        <p>Voltar pra home</p>
                `
}

function forma(){
`
                    <div class="questionArea">
                        <div class="questionHeader">
                            <h3 class="question">Não importa o quanto você caia, importa o quanto você...</h3>
                        </div>

                        <div class="questionContainer">
                            <div class="questionBody">
                                <div class="answer">
                                    <img src="imgs/exemple.jpg" class="imgAnswer unselectedImg">
                                </div>
                                <p class="answerText wrongText">... capota!</p>
                            </div>
                    
                            <div class="questionBody">
                                <div class="answer">
                                    <img src="imgs/exemple.jpg" class="imgAnswer unselectedImg">
                                </div>
                                <p class="answerText wrongText">... acha a derrota!</p>
                            </div>
                    
                            <div class="questionBody">
                                <div class="answer">
                                    <img src="imgs/exemple.jpg" class="imgAnswer unselectedImg">
                                </div>
                                <p class="answerText wrongText">... acha a reprovação!</p>
                            </div>
                    
                            
                            <div class="questionBody">
                                <div class="answer">
                                    <img src="imgs/exemple.jpg" class="imgAnswer">
                                </div>
                                <p class="answerText selectedText">... levanta!</p>
                            </div>
                        </div>
                    </div>

                    
`

}