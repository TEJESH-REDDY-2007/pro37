class Form {
  constructor() {
  //  this.input = createInput("name ")
  //  this.button = createButton('player')
  //  this.greeting = createElement('h2')
  }

  display(){
    var title = createElement('h2')
    title.html("PLAY WITH YOUR DOG");
    title.position(130, 0);
    
    var input = createInput("Name - ");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();

      player.name = this.input.value()

      playerCount+=1;
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Are You Ready " + name )
      greeting.position(130, 160)
    });

  }
}
