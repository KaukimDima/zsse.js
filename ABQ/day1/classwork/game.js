
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
        var myField = [];
        var cnt = 0;
        while(cnt < 15){
          var a = Math.floor(Math.random() * 15 + 1);
          if (!myField.includes(a)){
            myField.push(a);
            cnt = cnt + 1;
          }
        }
        myField.push(EMPTY_MARK)
        return myField;
    }

    this.print_field = function(field) {
        /*
        This method prints field to user.
        :param field: current field state to be printed.
        :return: None
        */
        for (var i = 0; i < 4; i++){
          console.log(field[4*i], field[4*i + 1], field[4*i + 2], field[4*i + 3]);
        }
      console.log("**************************************")
    }



    this.is_game_finished = function(field) {
        /*
        This method checks if the game is finished.
        :param field: current field state.
        :return: True if the game is finished, False otherwise.
        */
        var xIndex = field.indexOf(EMPTY_MARK);
        var fieldHere =field.slice();
        fieldHere.splice(xIndex,1);
        var cnt = 0;
        for (var i = 0; i < 15; i++){
          if (fieldHere[i] == i + 1){
            cnt = cnt + 1;
          }
        }
        if (cnt == 15){
          return true;
        }else{
          return false;
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
        var xIndex = field.indexOf(EMPTY_MARK);

        if (key  == -1){
            if (xIndex % 4 == 0){
              alert("You can not move left it is the limit)");
              return field;
            }else{
              var numb = field[xIndex + key];
              field[xIndex] = numb;
              field[xIndex + key] = 'x';
              return field;
            }
        }else if (key == 1){
          if (xIndex % 4 == 3){
            alert("You can not move right it is the limit)")
            return field;
          }else{
            var numb = field[xIndex + key];
            field[xIndex] = numb;
            field[xIndex + key] = 'x';
            return field;
          }
        }else if(key == 4){
          if (xIndex > 11){
            alert("You can not move bottom it is the limit)");
            return field;
          }else{
            var numb = field[xIndex + key];
            field[xIndex] = numb;
            field[xIndex + key] = 'x';
            return field;
          }
        }else if(key == -4){
          if (xIndex < 4){
            alert("You can not move up it is the limit)");
            return field;
          }else{
            var numb = field[xIndex + key];
            field[xIndex] = numb;
            field[xIndex + key] = 'x';
            return field;
          }
        }else {
          return false;
        }

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
        var flag = true;

        while(flag){
          var input = prompt('Please enter the moves ( w, s, a, d): ');
        if (input == 'w' || input == 's' || input == 'a' || input == 'd'){

            return MOVES[input];

          flag = false;
        }else{
          alert('Please enter the right move direction!!!!')
          flag = true;
        }
      }

    }



    this.main = function() {
        /*
        The main method. It stars when the program is called.
        It also calls other methods.
        :return: None
        */
      alert("LET's start my friend!!! ");
       var field =  self.shuffle_field();
       self.print_field(field);
       while(1){
       var key = self.handle_user_input();
       field = self.perform_move(field, key);
       self.print_field(field);
       if (self.is_game_finished(field)){
         break;
       }
     }


       // while(!self.is_game_finished(field)){
       //   self.print_field(field);
       //   var key = self.handle_user_input();
       //   while(self.perform_move(field, key)){
       //      self.perform_move(field, key)
       //    };
     // }

     alert('Thnxs for this game you are winner!! Congrats!!!')

    }
}

var game = new Game();
game.main();
