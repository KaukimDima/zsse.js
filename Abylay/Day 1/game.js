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

        var field=[];
        while (field.length < 15) {
         var Tempvalue=Math.floor(Math.random()*15)+1;
            if (field.includes(Tempvalue)==false) {
            field.push(Tempvalue);
         } 
        }
        field.push('X');
        return field;

    }

    this.print_field = function(field) {
        /*
        This method prints field to user.
        :param field: current field state to be printed.
        :return: None
        */
         console.log(field);
    }



    this.is_game_finished = function(field) {
        /*
        This method checks if the game is finished.
        :param field: current field state.
        :return: True if the game is finished, False otherwise.
        */
        var checkArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'X'];
        if (field===checkArray)
            return true;
        else return false;
    }

        

    this.perform_move = function(field, userInput) {
        /*
        Moves empty-tile inside the field.
        :param field: current field state.
        :param key: move direction.
        :return: new field state (after the move).
        :raises: IndexError if the move can't me done.
        */
        if(userInput=='d' && field.indexOf('X') % 4 == 0 ) {
            throw new error('Can not move right');
            
        }
            
        
        else if(userInput=='a' && field.indexOf('X') % 4 == 1) {
            throw new error('Can not move left');
            
        }
            

        else if (userInput=='s' && field.indexOf('X') >= 13) {
            throw new error('Can not move down');
            
        }
           
       
        else if(userInput=='w' && field.indexOf('X') <= 4) {
            throw new error('Can not move up');
            
        }
         
            var currentIndex=field.indexOf('X');
            var nextIndex=currentIndex+MOVES[userInput];
            var temp1=field[nextIndex];
            field.splice(currentIndex,1,temp1);
            field.splice(nextIndex,1,'X');
            
            return field;
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
       
        while (true) {
             var userInput=prompt("Enter your move");
             console.log(userInput);
            if (!userInput) break; 
           if (typeof MOVES[userInput] != 'undefined') {
            return userInput;
           }
            
        }
        
    }



    this.main = function() {
        /*
        The main method. It stars when the program is called.
        It also calls other methods.
        :return: None
        */
        var ar=this.shuffle_field();
    while (true)
    {
        if (this.is_game_finished(ar) ) break;
        
        var user_in=this.handle_user_input();
        var final_ar=this.perform_move(ar,user_in);
        this.print_field(final_ar);
        

    }
    }

    self.init();

}

new Game();
 






