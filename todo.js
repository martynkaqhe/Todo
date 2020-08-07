function todolist(){
    let newQuest = document.getElementById("nowe").value;
    
    const allQuest = [];
    let numeracja = [0];
   
        if(newQuest == "" ){
            document.getElementById("lista").innerHTML = "Musisz wpisać zadanie!!!";
         }
        else{
            allQuest.push(newQuest);
            numeracja++
            document.getElementById("lista").innerHTML = numeracja + '. ' + allQuest[0];
            newQuest = document.getElementById("nowe").value;
            document.getElementById("usuniecie").style.display = "block";
         }

}
function usun(){
    document.getElementById("lista").innerHTML = '';
    document.getElementById("usuniecie").style.display = "none";
}




