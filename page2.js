let awnsers = []

function openQuizz(selecionado) {
    document.querySelector(".page1").classList.add('page2');
    document.querySelector(".page2").classList.remove('page1');
    let container = document.querySelector(".page2");
    let id = Number(selecionado.querySelector(".quizz div p").innerText);
    let quizzBody = titleImg.find(data => data.id === id);
    console.log(quizzBody.questions);

    for(let i = 0; i < titleImg.length; i++){
        
        if(id===titleImg[i].id){

            container.innerHTML =
            `
            <div class="banner none">
            </div>
            <div class="questionZone">                  
            </div>

            <div class="resetQuizz">
                <p>Reiniciar Quizz</p>
            </div>
            <div class="backtoHome">
                <p>Voltar pra home</p>
            </div>
            `
            for(let i = 0; i<quizzBody.questions.length; i++){
                
                document.querySelector(".questionZone").innerHTML +=
                `
                <div class="questionArea">
                        <div class="questionHeader">
                            <h3 class="question">${quizzBody.questions[i].title}</h3>
                        </div>
                        <div class="questionContainer${i}">
                            <div onclick="selecionarResposta(this)" class="questionBody">
                                <div class="answer">
                                    <img src="${quizzBody.questions[i].answers[0].image}}" class="imgAnswer">
                                    <p class="true none">true</p>
                                </div>
                                <p class="answerText wrongText">${quizzBody.questions[i].answers[0].text}</p>
                            </div>
                    
                            <div onclick="selecionarResposta(this)" class="questionBody">
                                <div class="answer">
                                    <img src="${quizzBody.questions[i].answers[1].image}" class="imgAnswer">
                                    <p class="false none">false</p>
                                </div>
                                <p class="answerText wrongText">${quizzBody.questions[i].answers[1].text}</p>
                            </div>
                    
                        </div>
                </div>
                ` 
               if (quizzBody.questions[i].answers.length === 4){
                document.querySelector(`.questionContainer${i}`).innerHTML +=
                `
                <div onclick="selecionarResposta(this)" class="questionBody">
                    <div class="answer">
                        <img src="${quizzBody.questions[i].answers[2].image}}" class="imgAnswer">
                        <p class="false none">false</p>
                    </div>
                    <p class="answerText wrongText">${quizzBody.questions[i].answers[2].text}</p>
                </div>
                <div onclick="selecionarResposta(this)" class="questionBody">
                    <div class="answer">
                        <img src="${quizzBody.questions[i].answers[3].image}}" class="imgAnswer">
                        <p class="false none">false</p>
                    </div>
                    <p class="answerText wrongText">${quizzBody.questions[i].answers[3].text}</p>
                </div>
                `
                


               }else if(quizzBody.questions[i].answers.length === 3){
                document.querySelector(`.questionContainer${i}`).innerHTML +=
                `
                <div onclick="selecionarResposta(this)" class="questionBody">
                    <div class="answer">
                        <img src="${quizzBody.questions[i].answers[2].image}}" class="imgAnswer">
                        <p class="false none">false</p>
                    </div>
                    <p class="answerText wrongText">${quizzBody.questions[i].answers[2].text}</p>
                </div>
                `
                }
            }
        }
    } 

    document.querySelector(".banner").innerHTML =
    `
    <h2 class="bannerText">${quizzBody.title}</h2>
    <div class="gradient"></div>
    <img src="${quizzBody.image}" class="bannerImg">
    `
    let banner = document.querySelector(".banner")
    banner.classList.remove("none")
    window.scrollTo(0, 0);

    shufleAnswers();
}

function shufleAnswers() {

}

function selecionarResposta(selecionado) {

}



function quizzResult() {
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
    `
}

function forma() {
    `
    <div class="banner none">
    </div>

    <div class="questionZone">
            <div class="questionArea">
                <div class="questionHeader">
                    <h3 class="question">Não importa o quanto você caia, importa o quanto você... diz ai amigo o que você acha?</h3>
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
                </div>
            </div>

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
                </div>
            </div>

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

            


        </div>

        <div class="finalquizzArea">
            <div class="finalquizzHeader">
                <h3 class="finaltittlequiz">25% de Acerto: Para ser o chefe, você tem que vencer o chefe!</h3>
            </div>
            <div class="finalBody">
                <div class="imgfinalquizzArea">
                    <img src="imgs/exemple.jpg" class="imgFinalQuizz">
                </div>
                <div class="finalquizzTextArea">
                    <p class="finalquizzText">Você ainda não esta pronto para ser chefe, tem que começar a chefear bastante para ser chefe e chefiar como um chefe, meu chefe.</p>
                </div>
            </div>
        </div> 

   
    `


}