var drawFish = function(centerX, centerY, bodyLength, bodyColor, tailColor) {
    
    noStroke();
    fill(bodyColor);
    // body
    var bodyHeight = bodyLength/1.5;
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    fill(tailColor);
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5); 
    
};

var drawPebbles = function(pebX, pebY, pebSize) {
    
    var pebWidth = pebSize;
    var pebHeight = pebSize/1.5;
    stroke(107, 107, 107);
    fill(137, 137, 137);
    ellipse(pebX, pebY, pebWidth, pebHeight);
    
};    

var drawBubbles = function(bubX, bubY, bubSize) {
    
    var bubWidth = bubSize;
    var bubHeight = bubSize;
    stroke(255, 255, 255);
    noFill();
    ellipse(bubX, bubY, bubWidth, bubHeight);
    ellipse(bubX-bubSize/10, bubY-bubSize*(3/20), bubSize/4, bubSize/4);
    
};

mouseClicked = function() {
    
    drawFish(mouseX, mouseY, random(25, 100), color(random(255), random(255), random(255)), color(random(255), random(255), random(255)));
    
};

function setup() {
    createCanvas(400, 400); // Set the canvas size
    background(89, 216, 255); // Set the background color

    // Draw the default fish
    drawFish(200, 100, 75, color(127, 0, 255), color(0, 0, 255));
    drawFish(100, 300, 50, color(0, 127, 0), color(255, 255, 0));
    drawFish(300, 300, 25, color(255, 127, 0), color(252, 0, 0));

    //Draw the pebbles at random
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
    drawPebbles(random(0, 400), random(380, 400), random(20, 100));
            
    // Draw the bubbles at random
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
    drawBubbles(random(0, 400), random(0, 300), random(10, 20));
}

