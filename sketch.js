var box;
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,70,70);
}

function draw() {
  if (keyIsDown(RIGHT_ARROW))
  {
    background('red');
  }
  if (keyIsDown(LEFT_ARROW)){
    background('blue');
  }
  if (keyIsDown(UP_ARROW)){
    background('yellow');
  }
  if (keyIsDown(DOWN_ARROW)){
    background('green');
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    box.height = box.height + 0.2;
  }
  if (keyDown(LEFT_ARROW))
  {
    box.width = box.widht + 5;
  }
  if (keyIsDown(UP_ARROW))
  {
    box.width= box.width - 5;
  }
  if (keyIsDown(DOWN_ARROW))
  {
    box.height = box.height - 0.2;
  }
drawSprites();
}






