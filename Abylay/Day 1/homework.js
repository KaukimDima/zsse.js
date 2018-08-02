let Game = function() {

    let matchStatus=false;
    let MOVES = {
        '1': 0,
        '2': 1,
        '2': 2,
        '3': 3,
        '4': 5,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,

    }

    var self = this;

    this.init = function () {
        self.main();
    }

   let field=[];
  

    this.is_game_finished = function(field) {
        /*
        This method checks if the game is finished.
        :param field: current field state.
        :return: True if the game is finished, False otherwise.
        */
        if (field.length==9){
            matchStatus===true;
        }
       return matchStatus;
    }

    this.print_field = function(field) {
        /*
        This method prints field to user.
        :param field: current field state to be printed.
        :return: None
        */
    console.log(field[0], "|" , field[1] , "|" , field[2])
    console.log("----------")
    console.log(field[3] , "|" , field[4] , "|" , field[5])
    console.log("----------")
    console.log(field[6] , "|" , field[7] , "|" , field[8])

    }

        
   /* this.perform_move = function(field, userInput) {
        /*
        Moves empty-tile inside the field.
        :param field: current field state.
        :param key: move direction.
        :return: new field state (after the move).
        :raises: IndexError if the move can't me done.
        
        if(userInput=='0' && field.indexOf('X') % 4 == 0 ) {
            throw new error('Can not move right');
            
        }
            
        
         
            var currentIndex=field.indexOf('X');
            var nextIndex=currentIndex+MOVES[userInput];
            var temp1=field[nextIndex];
            field.splice(currentIndex,1,temp1);
            field.splice(nextIndex,1,'X');
            
            return field;
    }
     */   
        
    this.handle_user_input = function(matchStatus,field) {
        /*
        Handles user input. Array of accepted moves:
        'w' - up, 
        's' - down,
        'a' - left, 
        'd' - right
        :return: string current move.
        */
       
        while (matchStatus!=true) {
                let user1Input=prompt("You are X, enter you position");
                field[user1Input]='X';
                let user2Input=prompt("You are O, enter you position");
                field[user2Input]='O';
     }
             
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
        
    while (true)
    {
        if (this.is_game_finished(field) ) break;
        
        var user_in=this.handle_user_input(matchStatus);
        //var res=this.perform_move(ar,user_in);
        this.print_field(field);
        

    }
    }

    self.init();

}

new Game();
 






