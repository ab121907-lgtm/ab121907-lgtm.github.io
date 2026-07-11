$(function () {
 // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create 
   createPlatform(500, 200, 200, 20);
createPlatform(1000, 550, 200, 20, "red");
 createPlatform(900, 200, 200, 20);
createPlatform(350, 550, 200, 20, "blue"); createPlatform(800, 320, 200, 20);
createPlatform(700, 650, 200, 20, "black"); createPlatform(700, 450, 200, 20)
;


    // TODO 3 - Create Collectables
createCollectable("database", 1000, 160, 0.5, 0.7);
createCollectable("database", 200, 170, 0.5, 0.7);
createCollectable("database", 600, 160);
createCollectable("database", 1200, 170, 0.5, 0.7);




    
    // TODO 4 - Create Cannons
createCannon("left", 500, 5000);
createCannon("right", 300, 5000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
