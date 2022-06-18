function add_user(){
    
     player1=document.getElementById("name1").value
     player2=document.getElementById("name2").value
     localStorage.setItem("name1",player1)
     localStorage.setItem("name2",player2)
     window.location="quiz.html"
}