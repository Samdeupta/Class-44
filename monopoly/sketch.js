// game basic elements
var gameState = 0;
var playerCount = 0;
var database;
var allPlayers,player;


//board
var board,boardImg;

//player name input
var inputWindow;

//chance & community chest
var chance1,chance2,chance3; 
var chest1,chest2,chest3;

//go to jail,go,in jail, just visiting, income tax, luxury tax & free parking
var goToJail,go,inJail,incomeTax,luxuryTax;

//chance fates & community chest fates
var card1,card2,card3,card4,card5,card6,card7,card8,card9,card10;
var card1Img,card2Img,card3Img,card4Img,card5Img,card6Img,card7Img,card8Img,card9Img,card10Img;

var community1,community2,community3,community4,community5,community6,community7,community8,community9,community10;
var community1Img,community2Img,community3Img,community4Img,community5Img,community6Img,community7Img,community8Img,community9Img,community10Img;

//players, charecters
var player1,player2,player3,player4;
var plane,car,hat,ship;


function preload(){
  //board image
  boardImg = loadImage('images/monopolyBoard.png');

  //community cards images
  community1Img = loadImage('images/community/community1.png');
  community2Img = loadImage('images/community/community2.png');
  community3Img = loadImage('images/community/community3.png');
  community4Img = loadImage('images/community/community4.png');
  community5Img = loadImage('images/community/community5.png');
  community6Img = loadImage('images/community/community6.png');
  community7Img = loadImage('images/community/community7.png');
  community8Img = loadImage('images/community/community8.png');
  community9Img = loadImage('images/community/community9.png');
  community10Img = loadImage('images/community/community10.png');
  
  //chance cards images
  card1Img = loadImage('images/chance/chance1.png');
  card2Img = loadImage('images/chance/chance2.png');
  card3Img = loadImage('images/chance/chance3.png');
  card4Img = loadImage('images/chance/chance4.png');
  card5Img = loadImage('images/chance/chance5.png');
  card6Img = loadImage('images/chance/chance6.png');
  card7Img = loadImage('images/chance/chance7.png');
  card8Img = loadImage('images/chance/chance8.png');
  card9Img = loadImage('images/chance/chance9.png');
  card10Img = loadImage('images/chance/chance10.png');

  //peices images
  car = loadImage('images/peices/car.png');
  hat = loadImage('images/peices/hat.png');
  plane = loadImage('images/peices/plane.png');
  ship = loadImage('images/peices/ship.png');

  //plateImg = loadImage('images/plate.png');
}


function setup() {
  //canvas
  createCanvas(displayWidth,displayHeight-111);

  // database initialization
  database = firebase.database();
  
  // game class initialization   
  game = new Game();
  game.getState();
  game.start();
  
  //player peice.scale = 0.4

  

  
}

function draw() {
  background('black'); 
  
  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    //clear();
    game.rank();
    
  }


  
  drawSprites();
}