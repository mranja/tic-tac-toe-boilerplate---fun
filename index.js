var boxes = document.querySelectorAll(".box");
console.log(boxes)



var winningCominaations =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var Xattempts = [];
var Oattempts = [];

ans=[true,true,true]

var result = document.getElementById("result");
var message = document.getElementById("message");
var button = document.getElementById("button");

boxes.forEach(box => {
    box.onclick = handeleClick;

    
});

var click = 0

function handeleClick(e){
    console.log("e",e)
    var id_d = e.target.id;

    var texttobeinserted = document.createElement("p");
    boxes[id_d-1].append(texttobeinserted);

    if(click%2==0){
        Xattempts.push(id_d-1)
        texttobeinserted.innerHTML="X";
        texttobeinserted.style.color= "red"
        checkResult(winningCominaations,Xattempts,"X")
    }else{
        Xattempts.push(id_d-1)
        texttobeinserted.innerHTML="O";
        texttobeinserted.style.color= "red"
        checkResult(winningCominaations,Oattempts,"O")
    }
    if(click==9){
        result.style.visibility="visible"
        message.innerHTML="Its's a tie!"
    }
    click++
}

function checkResult(winningCominaations,attempts,players){
    var ans= [];
    var count=0;
    for(var i=0; i<winningCominaations.length;i++){
        if(Array.isArray(winningCominaations[i])){
            checkResult(winningCominaations[i],attempts,players);

        }else{
            if(attempts.includes(winningCominaations[i])){
                ans.push(true);
                count++;

            }else{
                ans.push(false);
            }
        }
    }
    if(ans.every(answer => answer == true)&&count>2){
        result.style.visibility="visible";
        message.innerHTML =`${players} won the game!`;
    }
}

button.onclick= () =>{
    window.location.reload();
}