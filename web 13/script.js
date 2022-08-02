var cells = document.getElementsByClassName("cell");

console.log(cells);
var flags =  [[null, null, null],
             [null, null, null],
              [null, null, null]];



var buttons = [[cells[0],cells[1],cells[2]],
             [cells[3],cells[4],cells[5]],
            [cells[6], cells[7], cells[8]]];


var ply = "x";

function show_index(x , y){
  if(flags[x][y]==null){
    flags[x][y] = "x"
  
    
    if(ply=="x"){
        
        buttons[x][y].innerHTML = "x";
        buttons[x][y].classList.add("x");
        ply = "o"
    }


    
    else if(ply=="o"){
        flags[x][y]="o"

    buttons[x][y].innerHTML = "o"
    buttons[x][y].classList.add("o")
    ply = "x"

}
}    
   else{
    alert("مث آدم بازی کن")
   } 
    check_game();   
    }
   function check_game(){
    if(flags[0][0]== "x" && flags[0][1] =="x" && flags[0][2] == "x" ){
        alert("بازیکن xبرنده است");
         }
         if(flags[1][0]== "x" && flags[1][1] =="x" && flags[1][2] == "x" ){
            alert("بازیکن xبرنده است");
             }
             if(flags[2][0]== "x" && flags[2][1] =="x" && flags[2][2] == "x" ){
                alert("بازیکن xبرنده است");
                 }
                 if(flags[0][2]== "x" && flags[1][2] =="x" && flags[2][2] == "x" ){
                    alert("بازیکن xبرنده است");
                     }
                     if(flags[0][0]== "x" && flags[1][1] =="x" && flags[2][2] == "x" ){
                        alert("بازیکن xبرنده است");
                         }
                          
                         else if(flags[0][0] =="o"&& flags[0][1]=="o"&& flags[0][2] =="o"){
                            alert("بازیکن oبرنده است");
                         }
                         else if(flags[1][0] =="o"&& flags[1][1]=="o"&& flags[1][2] =="o"){
                            alert("بازیکن oبرنده است");
                         }
                         else if(flags[2][0] =="o"&& flags[2][1]=="o"&& flags[2][2] =="o"){
                            alert("بازیکن oبرنده است");
                         }
                         else if(flags[0][0] =="o"&& flags[1][1]=="o"&& flags[1][2] =="o"){
                            alert("بازیکن oبرنده است");
                         }
                         else if(flags[1][1] =="o"&& flags[1][1]=="o"&& flags[2][0] =="o"){
                            alert("بازیکن oبرنده است");
                         }
    
   }
     



  
    




    
