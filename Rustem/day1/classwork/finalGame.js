var game = function() {

    var EMPTY_MARK = 'x';

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
        /*
        This method prints field to user.
        :param field: current field state to be printed.
        :return: None
        */
       for (var i = 0; i < 16;i+=4) {
                console.log(field[0+i], field[1+i],field[2+i],field[3+i]);
       }
    }



    this.is_game_finished = function(field) {
        /*
        This method checks if the game is finished.
        :param field: current field state.
        :return: True if the game is finished, False otherwise.
        */
    }
        

    this.perform_move = function(field, key) {
        /*
        Moves empty-tile inside the field.
        :param field: current field state.
        :param key: move direction.
        :return: new field state (after the move).
        :raises: IndexError if the move can't me done.
        */
        var currentIndex = field.indexOf(EMPTY_MARK); //emptymark index
        var newIndex;
        var oldValue;
        //up
        if (key == -4) {
            if (currentIndex <= 3) {
                console.log('Sorry you cant do this move');
            }else{
                newIndex = currentIndex-4;//index where will put emptymark
                oldValue = field[newIndex];
                field[newIndex] = EMPTY_MARK;
                field[currentIndex] = oldValue;
                }
            //down
        }else if (key == +4) {
            if (currentIndex >= 12) {
                console.log('Sorry you cant do this move');
            }else{
                newIndex = currentIndex+4;//index where will put emptymark
                oldValue = field[newIndex];
                field[newIndex] = EMPTY_MARK;
                field[currentIndex] = oldValue;
                }
            //left
        }else if (key == -1) {
            if (currentIndex % 4 ==0) {
                console.log('Sorry you cant do this move');
            }else{
                newIndex = currentIndex-1;//index where will put emptymark
                oldValue = field[newIndex];
                field[newIndex] = EMPTY_MARK;
                field[currentIndex] = oldValue;
                }
            //right
        }else if (key == +1) {
            if (currentIndex % 4 == 3) {
                console.log('Sorry you cant do this move');
            }else{
                newIndex = currentIndex+1;//index where will put emptymark
                oldValue = field[newIndex];
                field[newIndex] = EMPTY_MARK;
                field[currentIndex] = oldValue;
                }
        }
        console.log(field);
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
        var input = prompt ('Please enter your moves ("w"-up, "s"-down, "a"-left, "d"-right)', 'default');
        while (true) {
            if (input == 'w' || input == 's' || input == 'a' || input == 'd') {
                return MOVES[input];
            }
            else
            
            {
                
                input = prompt ('Please try another button ("w"-up, "s"-down, "a"-left, "d"-right)', 'default');

                            }
        }
        
    }



    this.main = function() {
        /*
        The main method. It stars when the program is called.
        It also calls other methods.
        :return: None
        */
       var MyARR = this.shuffle_field(); 
        this.print_field(MyARR);
    }

}

var game = new game();
var myfield = game.shuffle_field();
game.print_field(myfield);
game.perform_move(myfield,game.handle_user_input());

