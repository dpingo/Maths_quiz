var player1=localStorage.getItem("name1")
var player2=localStorage.getItem("name2")

player1_score=0
player2_score=0
document.getElementById("player_1").innerHTML=player1+": "
document.getElementById("player_2").innerHTML=player2+": "
document.getElementById("player_1_score").innerHTML=player1_score
document.getElementById("player_2_score").innerHTML=player2_score

document.getElementById("player_question").innerHTML="Question turn-"+player1
document.getElementById("player_ans").innerHTML="Answer turn-"+player2
function send(){
    document.getElementById("correct_ans").innerHTML=""
    num1= document.getElementById("no1").value
    num2= document.getElementById("no2").value
   ans=parseInt(num1)*parseInt(num1)

   question="<h3>"+num1+"X"+num2+"</h4>"
   user_input='<br> Answer: <input type="number" id="user"';
   check_btn="<br> <br> <br> <button class='btn btn-info' onclick='check()'>Check</button>"
   row=question+user_input+check_btn
   document.getElementById("output").innerHTML+=row

   num1= document.getElementById("no1").innerHTML=""
    num2= document.getElementById("no2").innerHTML=""
    
    //if(user_ans==ans){

    //}
    document.getElementById("no1").value=""
         document.getElementById("no2").value=""
}
question_turn="player1"
    ans_turn="player2"

    function check(){
        user_ans= document.getElementById("user").value

        if (user_ans==ans){

            if(ans_turn=="player2"){
                player2_score=  player2_score+1
                document.getElementById("player_2_score").innerHTML=player2_score
                document.getElementById("correct_ans").innerHTML="Correct answer: "+ans
            }
            else {
                player1_score=  player1_score+1
                document.getElementById("player_1_score").innerHTML=player1_score
                document.getElementById("correct_ans").innerHTML="Correct answer: "+ans
            }
        
        
        }
        document.getElementById("correct_ans").innerHTML="Correct answer: "+ans
        if(question_turn=="player1"){
            question_turn="player2"
            document.getElementById("player_question").innerHTML="Question turn- "+ player2
        }
         else{
            question_turn="player1"
            document.getElementById("player_question").innerHTML="Question turn- "+ player1
         }
        
         if(ans_turn=="player2"){
            ans_turn="player1"
            document.getElementById("player_ans").innerHTML="Answer turn- "+ player1
        }
         else{
            ans_turn="player2"
            document.getElementById("player_ans").innerHTML="Answer turn- "+ player2
         }
         document.getElementById("output").innerHTML=""
         //document.getElementById("correct_ans").innerHTML=""
        }
        