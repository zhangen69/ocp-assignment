class Character {
  getType(): string {
    return null;
  }

  draw(): void {
    // drawing the character
  }

  move(): void {
    // move => run / fly / swim / ...
  }
}

class AerialCharacter implements Character {
  getType(): string {
    return 'Aerial';
  }

  draw(): void {
    alert('Drawing aerial character');
  }

  move(): void {
    alert('Character flying');
  }
}

class TerrestialCharacter implements Character {
  getType(): string {
    return 'terrestial';
  }
  draw(): void {
    alert('Drawing terrestial character');
  }
  move(): void {
    alert('Character running');
  }
}

class AquaticCharacter implements Character {
  getType(): string {
    return 'aquatic';
  }
  draw(): void {
    alert('Drawing aquatic character');
  }
  move(): void {
    alert('Chracter swimming');
  }
}

class ClimbCharacter implements Character {
  getType(): string {
    return 'climb';
  }
  draw(): void {
    alert('drawing climb character');
  }
  move(): void {
    alert('character climbing');
  }
}

class GameEngine {
  add(character) {
    character.draw();
    character.move();
  }
}

const newGame = new GameEngine();
const characters = {
  aerial: new AerialCharacter(),
  terrestial: new TerrestialCharacter(),
  aquatic: new AquaticCharacter(),
  climb: new ClimbCharacter()
};

const program = () => {
  const input = prompt(
    'Please enter character type one of selection with "aerial", "terrestial", "aquatic" or "climb" (type "exit" to end the program):'
  );

  if (input === 'exit' || input === null) {
      alert('Program are closing...');
      return;
  }

  if (characters[input]) {
    newGame.add(characters[input]);
    program();
  } else {
    alert('Please enter "aerial", "terrestial", "aquatic" or "climb"!');
    program();
  }
};

// program();
