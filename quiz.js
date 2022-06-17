 function send(){
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
    user_ans= document.getElementById("user").value
    //if(user_ans==ans){

    //}
}