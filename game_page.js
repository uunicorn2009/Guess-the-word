 player_1_name=localStorage.getItem("player_1_name");
 player_2_name=localStorage.getItem("player_2_name");
player_1_score=0;
player_2_score=0;
 document.getElementById("player_1_name").innerHTML= player_1_name+":";
 document.getElementById("player_2_name").innerHTML= player_2_name+":";
 document.getElementById("player1_Score").innerHTML= player_1_score;
 document.getElementById("player2_Score").innerHTML= player_2_score;

 document.getElementById("Q_turn").innerHTML= "Question turn : "+player_1_name;
 
 document.getElementById("A_turn").innerHTML= "Answer turn : "+player_2_name;

 function sent(){
     getWord=document.getElementById("word").value ;
     Word=getWord.toLowerCase();
      charAt1=Word.charAt(1);
      console.log(charAt1);

      middle_char=Math.floor(Word.length/2);
      charAt2 = Word.charAt(middle_char);
      console.log(charAt2);

      last_char=Word.length-1;
      charAt3= Word.charAt(last_char);
      console.log(charAt3);

      remove_charAt1=Word.replace(charAt1,"_");
      console.log(remove_charAt1);

      remove_charAt2=remove_charAt1.replace(charAt2,"_");
      console.log(remove_charAt2);

      remove_charAt3=remove_charAt2.replace(charAt3,"_");
      console.log(remove_charAt3);

      header="<h4 id ='WordDisplay'>Q."+remove_charAt3+" </h4>";
      input= "<br>Answer. <input type='text' id='text_input'>";
      button=" <br><br><button class='btn btn-info' onclick='check()'>Check</button>";
      row = header+input+button;
      document.getElementById("output").innerHTML=row;
      document.getElementById("word").innerHTML="";
     }
     Question_turn="player1";
answer_turn="player2";

     function check(){
         Get_Answer=document.getElementById("text_input").value ;
         answer=Get_Answer.toLowerCase();
         if(Word==answer){
             if(answer_turn=="player1"){
                 player_1_score=player_1_score + 1;
                 document.getElementById("player1_Score").innerHTML=player_1_score;  }
                 else{
                    player_2_score=player_2_score + 1;
                 document.getElementById("player2_Score").innerHTML=player_2_score;    
                 }
         }
         if(Question_turn=="player1"){
            Question_turn="player2";
            document.getElementById("Q_turn").innerHTML="Question_turn: "+ player_2_name;  }
            else{
                Question_turn="player1";
                document.getElementById("Q_turn").innerHTML="Question_turn: "+ player_1_name;    
            }
            if(answer_turn=="player1"){
                answer_turn="player2";
                document.getElementById("A_turn").innerHTML="Answer_turn: "+ player_2_name;  }
                else{
                    answer_turn="player1";
                    document.getElementById("A_turn").innerHTML="Answer_turn: "+ player_1_name;    
                }
document.getElementById("output").innerHTML="";
     }


