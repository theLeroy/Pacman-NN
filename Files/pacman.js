

// Mutation function to be passed into bird.brain
function mutate(x) {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}

class PacMan {
  constructor(brain) {
    // position and size of bird
    this.x = 64;
    this.y = height / 2;
    this.r = 12;

    // Speed
    this.Speed = 1;

    // Is this a copy of another Bird or a new one?
    // The Neural Network is Pacmans's "brain"
    // if (brain instanceof NeuralNetwork) {
    //   this.brain = brain.copy();
    //   this.brain.mutate(mutate);
    // } else {
      this.brain = new NeuralNetwork(16, 32, 2);
    // }

    // Score is how many frames it's been alive
    this.score = 0;
    // Fitness is normalized version of score
    this.fitness = 0;
    // Score is how many food it's has eaten
    this.Foodscore = 0;
    // Foodfitness is normalized version of Foodscore
    this.Foodfitness = 0;
  }

  // Create a copy of this bird
  copy() {
    return new PacMan(this.brain);
  }

  // Display the Pacman
  show() {
    fill(255, 240, 102);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  // This is the key function now that decides
  // if it should jump or not jump!
  think(Ghost) {


      // Now create the inputs to the neural network
      let inputs = [];

      var closest = 1;
  //Blinky
      // x position
      inputs[0] = map(closest.x, this.x, width, 0, 1);
      // y position
      inputs[1] = map(closest.top, 0, height, 0, 1);

  //Pinky
      // x position
      inputs[2] = map(closest.x, this.x, width, 0, 1);
      // y position
      inputs[3] = map(closest.top, 0, height, 0, 1);

  //Inky
      // x position
      inputs[4] = map(closest.x, this.x, width, 0, 1);
      // y position
      inputs[5] = map(closest.top, 0, height, 0, 1);

  //Clyde
      // x position
      inputs[6] = map(closest.x, this.x, width, 0, 1);
      // y position
      inputs[7] = map(closest.top, 0, height, 0, 1);

  //Pacman
      // x position
      inputs[8] = map(closest.x, this.x, width, 0, 1);
      // y position
      inputs[9] = map(closest.top, 0, height, 0, 1);

  //Field Infromations
      // uper field
      inputs[10] = map(closest.x, this.x, width, 0, 1);
      // lower field
      inputs[11] = map(closest.x, this.x, width, 0, 1);
      // Left field
      inputs[12] = map(closest.x, this.x, width, 0, 1);
      // Right field
      inputs[13] = map(closest.x, this.x, width, 0, 1);

  //Position of Dot
      // x position
      inputs[14] = map(closest.x, this.x, width, 0, 1);
      // y position
      inputs[15] = map(closest.top, 0, height, 0, 1);




      // Get the outputs from the network
      let action = this.brain.predict(inputs);
      console.log("action= "+action);


  }

  // // Jump up
  // updateDirection(direct) {
  //   // up
  //   if (direct === 1) {
  //
  //     return directonstate
  //
  //   }
  // }



  // Update Pacmans's position based on velocity, gravity, etc.
  update() {
    // this.Speed += this.gravity;
    // this.velocity *= 0.9;
var directonstate = 0;

    if (directonstate === 0) {
      //Up
      this.y -= this.Speed;
    } else if (directonstate === 1) {
      //Down
      this.y += this.Speed;
    } else if (directonstate === 2) {
      //left
      this.x -= this.Speed;
    } else if (directonstate === 3) {
      //right
      this.x += this.Speed;
    } else {
      alert("Keine Richtung definiert.");
    }

    // // Every frame it is alive increases the score
    // this.score++;
  }
}
