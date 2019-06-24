var Character = /** @class */ (function () {
    function Character() {
    }
    Character.prototype.getType = function () {
        return null;
    };
    Character.prototype.draw = function () {
        // drawing the character
    };
    Character.prototype.move = function () {
        // move => run / fly / swim / ...
    };
    return Character;
}());
var AerialCharacter = /** @class */ (function () {
    function AerialCharacter() {
    }
    AerialCharacter.prototype.getType = function () {
        return 'Aerial';
    };
    AerialCharacter.prototype.draw = function () {
        alert('Drawing aerial character');
    };
    AerialCharacter.prototype.move = function () {
        alert('Character flying');
    };
    return AerialCharacter;
}());
var TerrestialCharacter = /** @class */ (function () {
    function TerrestialCharacter() {
    }
    TerrestialCharacter.prototype.getType = function () {
        return 'terrestial';
    };
    TerrestialCharacter.prototype.draw = function () {
        alert('Drawing terrestial character');
    };
    TerrestialCharacter.prototype.move = function () {
        alert('Character running');
    };
    return TerrestialCharacter;
}());
var AquaticCharacter = /** @class */ (function () {
    function AquaticCharacter() {
    }
    AquaticCharacter.prototype.getType = function () {
        return 'aquatic';
    };
    AquaticCharacter.prototype.draw = function () {
        alert('Drawing aquatic character');
    };
    AquaticCharacter.prototype.move = function () {
        alert('Chracter swimming');
    };
    return AquaticCharacter;
}());
var ClimbCharacter = /** @class */ (function () {
    function ClimbCharacter() {
    }
    ClimbCharacter.prototype.getType = function () {
        return 'climb';
    };
    ClimbCharacter.prototype.draw = function () {
        alert('drawing climb character');
    };
    ClimbCharacter.prototype.move = function () {
        alert('character climbing');
    };
    return ClimbCharacter;
}());
var GameEngine = /** @class */ (function () {
    function GameEngine() {
    }
    GameEngine.prototype.add = function (character) {
        character.draw();
        character.move();
    };
    return GameEngine;
}());
var newGame = new GameEngine();
var characters = {
    aerial: new AerialCharacter(),
    terrestial: new TerrestialCharacter(),
    aquatic: new AquaticCharacter(),
    climb: new ClimbCharacter()
};
var program = function () {
    var input = prompt('Please enter character type one of selection with "aerial", "terrestial", "aquatic" or "climb" (type "exit" to end the program):');
    if (input === 'exit' || input === null) {
        alert('Program are closing...');
        return;
    }
    if (characters[input]) {
        newGame.add(characters[input]);
        program();
    }
    else {
        alert('Please enter "aerial", "terrestial", "aquatic" or "climb"!');
        program();
    }
};
// program();
