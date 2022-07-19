function setup() {
    createCanvas(800, 500);
  }
  let x = 0
  let y = 100
  let gravity = 0.1
  let yDownFall = 0
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  let y2 = getRandomArbitrary(30, 400)
  let count = 100
  let mass = []
  
  function draw() { 
    
    background(200,200,200)
    
    drawBall()
    for (i =0; i < count; i+=1) 
    {
      drawBlocks(x - i*100)
    }
    
    
  }
  function drawBall(){
    stroke(30, 20,10);
    strokeWeight(3);
    fill(140, 140 ,140);
    ellipse(400, y, 15*2);
    x +=1
    if (yDownFall < 0)
     yDownFall += gravity * 10
    if (yDownFall >=0)
      yDownFall += gravity
    
    y += yDownFall
  }
  function drawBlocks(xi){
    rectMode(CORNERS);
    stroke(30, 20,10);
    strokeWeight(2);
    fill(140, 140 ,140)
    rect(790 -xi, 0, 800-xi, y2)
    rect(790 -xi, y2 + 150, 800 -xi, 500)
    
  }
  function keyPressed(){
    yDownFall = -10
  }