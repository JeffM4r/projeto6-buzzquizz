
/*functionamento do botão*/
let continueQuestionsButton = document.querySelector(".continueQuestionsButton")
continueQuestionsButton.addEventListener("click", saveValues)

/*variaveis*/

let tittleQuizzForm1 //valor titulo
let urlQuizzForm1 //identificador de url (precisa de https://)
let quantQuestionQuizzForm1  //numero de questões em string
let quantNivelQuizzForm1 //numero de questões em string

//convertidos para int:

let quantQuestionQuizzNumber //numero de questões em number
let quantNivelQuizzNumber //numero de niveis em number

/*funções*/

function saveValues(){  //validação de dados

    let tittleQuizzForm1 = document.querySelector(".tittlequizzform1").value
    let urlQuizzForm1 = document.querySelector(".urlquizzform1").value
    let quantQuestionQuizzForm1 = document.querySelector(".quantquestionquizzform1").value
    let quantNivelQuizzForm1 = document.querySelector(".quantnivelquizzform1").value

    quantQuestionQuizzNumber = parseInt(quantQuestionQuizzForm1)
    quantNivelQuizzNumber = parseInt(quantNivelQuizzForm1)

    if(tittleQuizzForm1 === "" || urlQuizzForm1 === "" || quantQuestionQuizzForm1 === "" || quantNivelQuizzForm1 === ""){
        alert("Preencha todos campos do formulário!")
    }

    else if( isNaN(quantQuestionQuizzNumber) || isNaN(quantNivelQuizzNumber)){
        alert("Apenas numeros nas zonas de quantidade de perguntas e níveis do quizz!")
    }

    else{
        if(tittleQuizzForm1.length < 20){
            alert("Título precisa de no mínimo 20 caracteres")
        }
        else if(checkUrl(urlQuizzForm1) !== true){
            alert("URL Inválido! É nescessário adicionar URL com informaões corretas: HTTP(s)://")
        }

        else if(quantQuestionQuizzNumber < 3){
            alert("É preciso de no mínimo 3 perguntas!")
        }

        else if(quantNivelQuizzNumber < 2){
            alert("É preciso de no mínimo 2 níveis!")
        }

        else{
            alert("Todos os dados estão válidos!")
        }

    }

}

function checkUrl(urlQuizzForm1) { //identificador de url
    try {
     let url = new URL(urlQuizzForm1)
     return true
   } catch(err) {
       return false
   }
 }


