
// create varibles to catch images with ids 
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// create variable as path 
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;


const randomChoreDoorGenerator = () => {
  // create a value between 0 and 2 that will change the path of the images 
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

// on click generate a new path for the image
doorImage1.onclick = () => {
    // change src of doorImage1 on click 
    doorImage1.src = openDoor1;
  }
  
  doorImage2.onclick = () => {
    // change src of doorImage2 on click 
    doorImage2.src = openDoor2;
  }
  
  doorImage3.onclick = () => {
    // change src of doorImage3 on click 
    doorImage3.src = openDoor3;
  }
  
  