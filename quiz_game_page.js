function game(){
    player1_name = localStorage.getItem("Player_1");
    player2_name = localStorage.getItem("Player_2");
    player1_score = 0;
    player2_score = 0;
    document.getElementById("player1_name").innerHTML = player1_name + " : ";
    document.getElementById("player2_name").innerHTML = player2_name + " : ";
    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;
    document.getElementById("question_turn").innerHTML = "QUESTION TURN : " + player1_name;
    document.getElementById("answer_turn").innerHTML = "ANSWER TURN : " + player2_name;

}

function send(){
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    document.getElementById("question").innerHTML = number1 + " X " + number2;
}