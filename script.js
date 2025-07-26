//firstly we access all boxes 
let boxes = document.querySelectorAll('.box');//All becz we want all boxes taking by class name so . operator
let resetbtn = document.querySelector('.reset');
let newGamebtn = document.querySelector('#new-game');
let msgcontainer = document.querySelector('.msg-container');
let msgg = document.querySelector('.msg');
let devinfo = document.querySelector('.developer-info');
let devinfoo = document.querySelector('.devinfo');

//choosing turn like player 0 or player x
let turn0 = true; //true means player 0's turn0

//we store all wining combinations in an array 2D array

const wingcombinations = [//it is 2D array so it contain multile array in it
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left
  [2, 4, 6]  // Diagonal from top-right

];


// now we add on click event function for each boxes/button 
// we use forEach loop to iterate over all boxes
boxes.forEach((box)  => {
    box.addEventListener('click',() => {
        console.log("bos is clicked.");

        //checking whoose turn and working on that cases
        if(turn0 == true){//if true that means its player O turn and box show O
            box.innerText="O";
            box.style.color = "black"; // Change color for player O
            turn0 = false;

        }
        else{
            box.innerText="X";
            turn0 = true;
        }
        box.disabled = true; //disable the box after click so that it can't be clicked again
        
        checkWinner();//after each click we check if someone has won or not

    });
});



//function to check if someone has won
const checkWinner = () => {
    for(let pattern of wingcombinations) {
        //we check if all three boxes in the pattern have the same value
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val == pos2val && pos2val == pos3val){

                console.log("winner",pos1val);
                showwinner(pos1val); // Show the winner
                disableboxess();
            }
            // code if match is drawn and no player winn
            else if ([...boxes].every(box => box.innerText !== "")) {
                msg.innerText = "It's a Draw!";
                msgcontainer.classList.remove("hide");
                disableboxess();
                console.log("Match is Drawn");
            }
            
        }
        
    }

}

//showwinner function definiton
const showwinner = (winner) => {
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

//function to disable all boxes after someone has won
const disableboxess = () =>
{

    for (box of boxes){
        box.disabled = true;//it will desable the boxes after 1 win
    }
    
}



// chorrrrrrrrrrrrr
const resetgame = () => {
    turn0 = true; // Reset the turn to player O
    enablebox();//function for  Enable all boxes
    msgcontainer.classList.add("hide"); // Hide the message container

}


const enablebox = () =>
{
    
    for (box of boxes){
        box.disabled = false;//it will desable the boxes after 1 win
        box.innerText = ""; // Clear the text in each box
    }

}

// Reset button functionality
resetbtn.addEventListener('click',resetgame);
newGamebtn.addEventListener('click',resetgame);


//name devinfo

devinfo.addEventListener('click', () => {
    //document.writeln("created by user");
    //  devinfo.classList.toggle('hide'); // Toggle the visibility of the developer info message
    devinfoo.classList.toggle('hide'); // Toggle the visibility of the developer info message
    
});



