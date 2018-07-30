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
	let field = [];
	this.shuffle_field = function() {
			/*
			This method is used to create a field at the very start of the game.
			:return: list with 16 randomly shuffled tiles,
			one of which is a empty space.
			*/
		
		do {
			let num = Math.floor(Math.random() * 15) + 1;
			if( !field.includes(num) ) {
				field.push(num);
			}
		}
		while(field.length < 15)
		field.push(EMPTY_MARK);
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
		let newArr = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,'x' ];
		if( field == newArr ) return true;
		else return false; 
	}
			

	this.perform_move = function(field, key) {
			/*
			Moves empty-tile inside the field.
			:param field: current field state.
			:param key: move direction.
			:return: new field state (after the move).
			:raises: IndexError if the move can't me done.
			*/
		
		/* if ( MOVES[key] == "d" && field.indexOf(EMPTY_MARK) - 4 < 0 ) {
			throw new Error("Error!");
		}
		if( MOVES[key] == "a" && field.indexOf(EMPTY_MARK) + 4 == 0) {
			throw new Error("Error!");
		}
		if( MOVES[key] == "w" && field.indexOf(EMPTY_MARK) % 1 == 0) {
			throw new Error("Error!");
		}
		if( MOVES[key] == "s" && field.indexOf(EMPTY_MARK) % 4 == 0) {
			throw new Error("Error!");
		} */

		let index = field.indexOf(EMPTY_MARK);
		field[index] = field[index + key];
		field[index + key] = EMPTY_MARK;

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
		
			let userInput = prompt("Input for: 'w' - up, 's' - down, 'a' - left,'d' - right", "d");
			if(userInput == "w" || userInput == "s" || userInput == "a" || userInput == "d") {
				return (userInput);
			}
		
	}


	this.main = function() {
			/*
			The main method. It stars when the program is called.
			It also calls other methods.
			:return: None
			*/
			this.shuffle_field();
			this.print_field(field);
			while (true) {
				if( this.is_game_finished() ) break;
				let userInput = this.handle_user_input();
				this.perform_move(field, userInput);
				this.print_field(field);
			}
	}
	self.init();

}

new Game();
