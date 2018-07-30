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
       let PLACE=[];
       let i=1;
       let rnd;
       while (PLACE.length <= 14) { 
           rnd = Math.floor(Math.random()* 16)+1;
          // console.log(i)
        if  (i == 1) {
            PLACE.push(rnd);
            i++;
        }
        else if (PLACE.includes(rnd) == false) {
            PLACE.push(rnd);
            i++;
        }
        //i++;
        }
        PLACE.push(EMPTY_MARK);
        return PLACE;
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
        var emptymarkindex = field.indexOf(EMPTY_MARK); //emptymark index
        var newindex;
        var oldvalue;
        //up
        if (key == -4) {
            if (emptymarkindex <= 4) {
                console.log('Sorry you cant do this move');
            }else{
                newindex = emptymarkindex-4;//index where will put emptymark
                oldvalue = field[emptymarkindex-4];
                field[newindex] = EMPTY_MARK;
                field[emptymarkindex] = oldvalue;
                }
            //down
        }else if (key == +4) {
            if (emptymarkindex >= 12) {
                console.log('Sorry you cant do this move');
            }else{
                newindex = emptymarkindex+4;//index where will put emptymark
                oldvalue = field[emptymarkindex+4];
                field[newindex] = EMPTY_MARK;
                field[emptymarkindex] = oldvalue;
                }
            //left
        }else if (key == -1) {
            if (emptymarkindex%4 == 0) {
                console.log('Sorry you cant do this move');
            }else{
                newindex = emptymarkindex-1;//index where will put emptymark
                oldvalue = field[emptymarkindex-1];
                field[newindex] = EMPTY_MARK;
                field[emptymarkindex] = oldvalue;
                }
            //right
        }else if (key == +1) {
            if (emptymarkindex%4 == 3) {
                console.log('Sorry you cant do this move');
            }else{
                newindex = emptymarkindex+1;//index where will put emptymark
                oldvalue = field[emptymarkindex+1];
                field[newindex] = EMPTY_MARK;
                field[emptymarkindex] = oldvalue;
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
        var flagtoexit = false;
        var input = prompt ('Please enter your moves ("w"-up, "s"-down, "a"-left, "d"-right)', 'default');
        while (!flagtoexit) {
            if (input == 'w' || input == 's' || input == 'a' || input == 'd') {
                return MOVES[input];
                flagtoexit = true;
            }
            else{
                
                input = prompt ('Please try another button ("w"-up, "s"-down, "a"-left, "d"-right)', 'default');
                
                flagtoexit = false;
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

var Goodgame = new game();
var myfield = Goodgame.shuffle_field();
console.log(myfield);
Goodgame.print_field(myfield);
Goodgame.perform_move(myfield,Goodgame.handle_user_input());



