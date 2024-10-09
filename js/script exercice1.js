var obj_question=document.getElementById('quest');  // on met que des id
//var obj_question=document.formQuestion.question;   on met que des names
var obj_reponse=document.getElementById("rep");
function afficher()
{
    switch(obj_question.value)
    {
        case "0" : obj_reponse.value="Veuillez choisir une question dans la liste";
                    break;
        case "1" : obj_reponse.value="Cascading Style Sheets";
                    break;
        case "2" : obj_reponse.value="HyperText Markup Language";
                    break;
        case "3" : obj_reponse.value="JavaScript";
    }
}



//obj_question.addEventListener('change',afficher);