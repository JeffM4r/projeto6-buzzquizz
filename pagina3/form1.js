let quizzSend = "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes"

let continueQuestionsButton = document.querySelector(".continueQuestionsButton")
continueQuestionsButton.addEventListener("click", reciveForm1)


function reciveForm1() {
    promisse = axios.post(quizzSend)  //post dando error, mas funciona com get (?)

    promisse.then(confirmation)
    promisse.catch(erropost)
}


function confirmation (){
    console.log("Thats Ok")

    let tittlequizzform1 = document.querySelector(".tittlequizzform1").value
    let urlquizzform1 = document.querySelector(".urlquizzform1").value
    let quantquestionquizzform1 = document.querySelector(".quantquestionquizzform1").value
    let quantnivelquizzform1 = document.querySelector(".quantnivelquizzform1").value

    const sendArray = {
        tittle: tittlequizzform1,
        image: urlquizzform1,
        questions: quantquestionquizzform1,
        levels: quantnivelquizzform1,
    }



}

function erropost (){
    console.log("Error")
}
