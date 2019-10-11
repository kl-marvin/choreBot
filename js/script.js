
// create varibles to catch images with ids using the DOM
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// create variable as path 
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentPlaying = true;

let startButton = document.getElementById('start');


 // create a value between 0 and 2 that will change the path of the images
const randomChoreDoorGenerator = () => {
 
choreDoor = Math.floor(Math.random() * numClosedDoors);
  
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 =  beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
   openDoor2 = botDoorPath;
   openDoor1 = beachDoorPath;
   openDoor3 = spaceDoorPath;
  }else { (choreDoor === 2)
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
}

  console.log('test1');


const gameOver = (status) => {
    if(status === 'win'){
        startButton.innerHTML = 'You win ! Play Again ?';  
    } else { 
        startButton.innerHTML = 'Game Over ! Play again ?';
    }
    currentPlaying = false;
}



// checking if the door is the bot
const isBot = (door) => {
    if(door.src === botDoorPath){
        return true;
    } else {
        return false;
    }
}

// checking is the door has been clicked 
const isClicked = (door) => {
            if(door.src === closedDoorPath){
               return false;
            }else{
                true;
            }
};

// will decrease number of door left to open and when 0
const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0){
        gameOver('win');
    } else if(isBot(door)){
        gameOver('lose');
    }
};


const startRound = () => {

        doorImage1.src = closedDoorPath;
        doorImage2.src = closedDoorPath;
        doorImage3.src = closedDoorPath;
        numClosedDoors = 3;
        startButton.innerHTML = "Good Luck !";
        currentPlaying = true;
        randomChoreDoorGenerator();
    
}

// on click generate a new path for the image 
doorImage1.onclick = () => {
    // check if image has not been clicked and the winning/losing condition is not met 
    if(!isClicked(doorImage1) && currentPlaying === true) {
    // change src of doorImage1 on click 
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
      }
 
  };
  
  doorImage2.onclick = () => {
    if(!isClicked(doorImage2) && currentPlaying === true) {
    // change src of doorImage2 on click 
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
      }
    
   
  };
  
  doorImage3.onclick = () => {
    if(!isClicked(doorImage3) && currentPlaying ===true) {
    // change src of doorImage3 on click 
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
}


startButton.onclick = () => {
    if(currentPlaying === false){
        startRound();
    }
   
}

startRound();

  console.log('test2');