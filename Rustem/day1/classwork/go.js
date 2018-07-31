var Game = function() {

    var EMPTY_MARK = 'x'

    var MOVES = {
        'w': -4,
        's': 4,
        'a': -1,
        'd': 1,
    }

    var self = this;

    this.init = function () {
        self.main();
    }

    this.shuffle_field = function() {


      /*
      This method is used to create a field at the very start of the game.
      :return: list with 16 randomly shuffled tiles,
      one of which is a empty space.
      */

        var arr = [];

        while(arr.length != 16) {

        number =  Math.floor(((Math.random() * 16) + 1));

        if (arr.includes(number) == false) {

          arr.push(number);

        }

        }

        arr[15] = EMPTY_MARK;


return arr;


    }

    this.print_field = function(field) {


console.log(field.slice(0,4));

console.log(field.slice(4,8));

console.log(field.slice(8,12));

console.log(field.slice(12,16));

      }



    this.is_game_finished = function(field) {

              /*
              This method checks if the game is finished.
              :param field: current field state.
              :return: True if the game is finished, False otherwise.
              */


      var corr_array = []

      for (var i = 1; i <= 16; i++ ) {

        corr_array.push(i)

      }

      corr_array[15] = EMPTY_MARK;

      console.log(corr_array);


      for(i = 0; i <= 15; i++){

        if (field[i] == corr_array[i]){

          return true;
        }

        else {

          return false;
        }
      }
    }


    this.perform_move = function(field, key) {
        /*
        Moves empty-tile inside the field.
        :param field: current field state.
        :param key: move direction.
        :return: new field state (after the move).
        :raises: IndexError if the move can't me done.
        */

        current_index = field.indexOf("x");

        

    }


    this.handle_user_input = function() {



        /*
        Handles user input. Array of accepted moves:
        'w' - up,
        's' - down,
        'a' - left,
        'd' - right
        :return: string current move.
        */
    }



    this.main = function() {
        /*
        The main method. It stars when the program is called.
        It also calls other methods.
        :return: None
        */
    }

}
var game = new Game();

bla = game.shuffle_field();

game.print_field(bla);

console.log(game.is_game_finished(bla));
