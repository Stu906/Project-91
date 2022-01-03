function adduser(){
    var player1= document.getElementById("player1_name_input").value;
    var player2= document.getElementById("player2_name_input").value;
    window.localStorage.setItem("Player_1", player1);
    window.localStorage.setItem("Player_2", player2);
    window.location="quiz_game_page.html";
}