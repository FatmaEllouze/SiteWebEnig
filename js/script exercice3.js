function verif() { 
    var nom = document.form.nom.value; 
    // var nom = document.getElementByID("nom").value; 
    var prenom = document.form.prenom.value; 
    var date=document.form.naissance.value; 
    var pays=document.form.pays.value; 
    var gender = document.getElementsByName("sexe"); //radio
    var tabLangues= document.form.elements["langues"]; //checkbox
    var checkCount = 0;


    if(nom=="") {
        alert('Ajouter votre Nom !');
        document.form.nom.focus(); 
      return false;

    } 

  if(prenom=="") {
        alert('Ajouter votre Prénom !\n');
        document.form.prenom.focus(); 
        return false;

    } 
    if(date=="") {
        alert('Ajouter La Date !\n');
        document.form.naissance.focus(); 
        return false;

        
    } 
     //sexe
            if  (gender[0].checked == false && gender[1].checked == false) {
                alert('Choisir le sexe!');
                return false;


            }
 
    //pays
    if (pays == "vide") {
    alert("Vous devez choisir votre pays !!");
    return false;

}    
        //langues

 for (var i = 0; i < tabLangues.length; i++) {
if (tabLangues[i].checked==true)
checkCount += 1;

    }

 if (checkCount == 0){
      alert("Choisir au moins une langue");
      return false;

    } 

 }
 
