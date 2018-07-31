const Game = function() {
	
	const croosMark = 'X';
	const nullMark = 'O';

	const movesKey = {
		'X' : 'X',
		'O' : 'O',
	}
	
	const winCombinations = [
		[0, 1, 2],
		[0, 3, 6],
		[0, 4, 8],
		[1, 4, 7],
		[2, 4, 6],
		[2, 5, 8],
		[3, 4, 5],
		[6, 7, 8],
	] 

	const self = this;

	this.init = function() {
		self.main();
	}

	let field = [];
	
	this.createField = () => {
		for(let i = 0; i <= 8; i++ ) {
			field.push('');
		}
	}

	this.printField = () => {
		console.log(field);
	}

	this.isGameFinished = (field) => {
		let arrX = [];
		let arrO = [];

		field.forEach( (element, index) => {
			if (element == '') {
				if (element == 'X') arrX.push(index);
				if (element == 'O') arrO.push(index);
			} else return true;
		});

		for(let i = 0; i <= winCombinations.length; i++) {
			if(winCombinations[i] == arrX) {
				alert ("X wins");
				return true;
			} else if(winCombinations[i] == arrO) {
				alert("O wins");
				return true;
			} else return false;
		}
	}

	this.handleUserInput = () => {
		let userInput = prompt("Input index of array: ", "0");
		if(userInput >= 0 && userInput <= 8) return userInput;
	}

	this.performMove = (field, index) => {
		if( field[key] != '') {
			throw new Error("Error!");
		}
		// FIXME: sequence of moves 

	}

	this.main = function() {
		this.createField();
		// TODO: Invoke functions
	}

}

new Game();