let quizzList = "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes"
let titleImg;

function loadpage(){
   let teste = axios.get(quizzList);
   teste.then(showQuizz)
}

function showQuizz(content){
    titleImg = content.data
    let quizz = document.querySelector(".generalquizz")
    
    
    for(let i = 0; i < titleImg.length; i++){

        quizz.innerHTML +=`
            <div onclick="openQuizz(this)" class="quizz">
                <img src="${titleImg[i].image}" alt="">
                <div class="gradient">
                    <p class="none">${titleImg[i].id}</p>
                </div>
                <h3>${titleImg[i].title}</h3>
            </div>
        ` 
    }
}

loadpage();