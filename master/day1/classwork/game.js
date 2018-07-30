var game = function() {

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
    }

    this.print_field = function(field) {
        /*
        This method prints field to user.
        :param field: current field state to be printed.
        :return: None
        */
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





