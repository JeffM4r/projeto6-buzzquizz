let quizzList = "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes"

function loadpage(){
   let teste = axios.get(quizzList);
   teste.then(showQuizz)
}

function showQuizz(content){
    let titleImg = content.data
    let quizz = document.querySelector(".generalquizz")
    
    for(let i = 0; i < titleImg.length; i++){

        quizz.innerHTML +=`
            <div onclick="openQuizz()" class="quizz">
                <img src="${titleImg[i].image}" alt="">
                <div class="gradient"></div>
                <h3>${titleImg[i].title}</h3>
            </div>
        ` 
    }
}

loadpage();