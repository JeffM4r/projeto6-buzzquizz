let quizzSend = "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes"

let continueQuestionsButton = document.querySelector(".continueQuestionsButton")
continueQuestionsButton.addEventListener("click", saveValues)

let tittleQuizzForm1
let urlQuizzForm1 
let quantQuestionQuizzForm1 
let quantNivelQuizzForm1

let quantQuestionQuizzNumber
let quantNivelQuizzNumber

function saveValues(){

    let tittleQuizzForm1 = document.querySelector(".tittlequizzform1").value
    let urlQuizzForm1 = document.querySelector(".urlquizzform1").value
    let quantQuestionQuizzForm1 = document.querySelector(".quantquestionquizzform1").value
    let quantNivelQuizzForm1 = document.querySelector(".quantnivelquizzform1").value

    quantQuestionQuizzNumber = parseInt(quantQuestionQuizzForm1)
    quantNivelQuizzNumber = parseInt(quantNivelQuizzForm1)

    if(tittleQuizzForm1 !== "" && urlQuizzForm1 !== "" &&  quantQuestionQuizzNumber === Number && quantNivelQuizzNumber === Number){
        console.log("Ok!")
    }

    else if(tittleQuizzForm1 === "" || urlQuizzForm1 === "" || quantQuestionQuizzForm1 === "" || quantNivelQuizzForm1 === ""){
        alert("Preencha todos campos do formulário!")
    }

    else if(quantQuestionQuizzNumber !== Number || quantNivelQuizzNumber !== Number){
        console.log("Quantidade de questões tem que ser um numero!")
        console.log(quantQuestionQuizzNumber)
        console.log(quantNivelQuizzNumber)
    }
}

// function reciveForm1() {
//     promisse = axios.post(quizzSend)  //post dando error, mas funciona com get (?)

//     promisse.then(confirmation)
//     promisse.catch(erropost)
// }


// function confirmation (){
//     console.log("Thats Ok")

//     let tittlequizzform1 = document.querySelector(".tittlequizzform1").value
//     let urlquizzform1 = document.querySelector(".urlquizzform1").value
//     let quantquestionquizzform1 = document.querySelector(".quantquestionquizzform1").value
//     let quantnivelquizzform1 = document.querySelector(".quantnivelquizzform1").value

//     const sendArray = {
//         tittle: tittlequizzform1,
//         image: urlquizzform1,
        
//     }
// }

// function erropost (){
//     console.log("Error")
// }
