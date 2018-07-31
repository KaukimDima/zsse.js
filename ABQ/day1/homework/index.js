//var x = 3;

//var degree = prompt('Vvedite stepen: ');
// var res = 1;
// for(var i=1; i <= degree; i++){
//   res = x * res;
// }
//
// alert(res)
//
//
// var admin;
// var name = "Василий";
//
// admin = name;
// alert(admin)
//
// var ourPlanetName = "земля";
// var userName = "Петя";
// var n = 0;
// var years = prompt('Skolko vam let?', ' ');
// alert("Vam "+years+" let!");





// var sum = 0;
// var str = prompt("What is the text: ");
// var words = str.split(" ");
// for (var i = 0; i < words.length ; i++) {
//
//
//     if (words[i] == words[i].split("").reverse().join("")){
//          sum = sum + 1;
//          console.log(words[i]);
//          //console.log(words[i].split("").reverse().join(""))
//        }
// }
// console.log(sum);








// var password = 'vasya';
// var nameYours = prompt("How are you?", " name");
// if (nameYours == "Admin"){
//   var pass = prompt("vvedite parol: ");
//   if (pass == password){
//     alert("Dobro pozhalovat!");
//   }else if(pass == null){
//     alert("vhod otmenen!")
//
//   }else{
//     alert("Parol neveren")
//   }
// }else if(nameYours == null){
//   alert("vhod otmenen!")
// }else{
//   alert("Ya vas ne znaiu")
// }


// var a = 3, b = 2;
//
// var result = (a+b < 4) ? "malo" : "Mnogo";
// alert(result);
//
// var login = prompt("who are you?","Name here");
//
// var message = (login == "director") ? "zdravstvuite":
//               (login == "Vasya") ? "privet":
//               (login == null) ? "net logina":
//               " ";
//
// alert(message);
//
// for (var i = 2; i < 15; i++){
//   var count = 0;
//   for (j = 1; j < i; j++){
//      if (i%j == 0){
//        count = count + 1;
//   }
//
//   }
// if (count == 1){
//   alert(i);
// }
// }
// var a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert( '0' );
//     break;
//   case 1:
//     alert( '1' );
//     break;
//   case 2:
//   case 3:
//     alert( '2,3' );
//     break;
//   default:
//     break;
// }

// var a = prompt("what is x?", '');
// var b = prompt("what is n?", '');
//
// function pow(x,n){
//   var res = 1
//   var x = arguments[0] || 1;
//   var n = arguments[1] || 1;
//   for (var i = 1; i <= n; i++){
//     res = res * x;
//   }
//   return res;
// }
//
// alert(pow(a,b))
// console.log(-Number.MAX_VALUE);
var parentObject = {
  nameCompany : 'Zeinet&SSE',
  yearCreation : 2002,
  quantityEmployees : 35,
  showName : function(){
    alert(this.nameCompany);
  }
}

var dt = Date(Date.now());
var arr = new Array(1000);


for (var i = 0; i < arr.length; i++){
var objectOur = 'name'+i;
objectOur = Object.create(parentObject);
Object.defineProperty(objectOur, 'password', {
  value : '12345',
  enumerable : false,
  writable : false
});
objectOur["ID"] = i;
objectOur["name"] = 'Sensor'+ '-' + (i + 1);
objectOur["temp"] = 30 + i;
objectOur["pressure"] = 40 + i;
objectOur["vibrations"] = 50 + i;
objectOur["date"] = dt;
arr[i] = objectOur;
}
console.log(arr)


var listId = new Array();
for (var i=0; i< arr.length; i++){
  listId.push(parseInt(arr[i]['ID']))
}
console.log(listId.sort()[listId.length-1])

//
// function fib(n) {
//   var a = 1,
//     b = 1;
//   for (var i = 3; i <= n; i++) {
//     var c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fib(100))

// var orgChart = {
//   name: 'Micheal', subordinates: [
//     {
//       name: 'Andy', subordinates: [
//         {
//           name: 'Dwight', subordinates:[]
//         },
//         {
//           name: 'Kevin', subordinates:[]
//         }
//       ]
//     }
//   ]
// }
//
//
// var fn = function (topEmployee){
//   console.log(topEmployee.name);
//   for (var i=0; i < topEmployee.subordinates.length; i++){
//     fn(topEmployee.subordinates[i]);
//   }
// }
//
// fn(orgChart)


// function factorial(n){
//   return (n!=0)? n * factorial(n-1) : 1;
// }
// console.log(factorial(5));

// var Tank = function(health, speed){
//   this.health = health;
//   this.speed = speed;
//   this.hit = function(){
//     alert('You want to hit');
//   }
//
//   this.move = function (){
//     alert('you want to move');
//   }
// }
//
//
// Tank.prototype.brake = function() {
//   alert("brakessss");
// }
//
//
// var myTank = new Tank(100, 100);
// var myTank2 = new Tank(90, 90);
// //console.log(myTank.hit() === myTank2.hit());
// //console.log(myTank.brake() === myTank2.brake());
// console.log(myTank.health);
// console.log(myTank2.speed);
// console.log(typeof myTank);
// console.log(myTank.__proto__);
// console.log(Tank.prototype);
// console.log(Tank.__proto__);


// var askFirst = function(){
//   var a = parseFloat(prompt("vvedite chislo pervoe", ''));
//   if (a){
//     return a;
//   }else{
//     askFirst()
//   }
// }
//
// var askSecond = function(){
//   var a = parseFloat(prompt("vvedite chislo vtoroe", ''));
//   if (a){
//     return a;
//   }else{
//     askSecond()
//   }
// }
//
// var firstNumb = askFirst();
// var secondNumb = askSecond();
//
// alert(firstNumb + secondNumb)

// function isEmptyObject(obj){
//   count = 0;
//   for (key in obj){
//     count = count + 1;
//   }
//   if (count == 0){
//     return true;
//   }else{
//     return false;
//   }
// }
//
//
// obj = { };
//
// console.log(isEmptyObject(obj));
//
// obj.name = "Masha";
//
//
// console.log(isEmptyObject(obj));









var Game = function() {

    var EMPTY_MARK = '*';

    var X_MARK = 'x';
    var O_MARK = 'o';
    var  MOVES_KEY = {'x' : 'x', 'o' : 'o'}

    var self = this;

    this.init = function () {
        self.main();
    }

    this.create_empty_field = function() {
        /*
        This method is used to create a field at the very start of the game.
        :return: list with 16 randomly shuffled tiles,
        one of which is a empty space.
        */
        var myField = [];
        var cnt = 0;
        while(cnt < 9){
            myField.push(EMPTY_MARK);
            cnt = cnt + 1;
          }
          return myField;
        }



    this.print_field = function(field) {
        /*
        This method prints field to user.
        :param field: current field state to be printed.
        :return: None
        */
        for (var i = 0; i < 3; i++){
          console.log(field[3*i], field[3*i + 1], field[3*i + 2]);
        }
      console.log("**************************************")
    }



    this.is_game_finished = function(field) {
        /*
        This method checks if the game is finished.
        :param field: current field state.
        :return: True if the game is finished, False otherwise.
        */
        var flag_to_check = false;
        var cnt = 0;
        for (var i = 0; i < 3; i++){
          if(field[i]==field[i+3] && field[i+3] == field[i+6] && field[i+6] != EMPTY_MARK){    // To check all columns
            flag_to_check = true;
          }

          if(field[3*i]==field[3*i+1] && field[3*i+1] == field[3*i+2] && field[3*i+2] != EMPTY_MARK){    // To check all rows
            flag_to_check = true;
          }
        }


          if(field[0] == field[4] && field[4] == field[8] && field[8] != EMPTY_MARK){    // To check first diagonal
            flag_to_check = true;
          }

          if(field[2] == field[4] && field[4] == field[6] && field[6] != EMPTY_MARK){    // To check second diagonal
            flag_to_check = true;
          }

          // for(var j = 0; j < 9; j++){
          //   if(field[j]!= EMPTY_MARK){
          //     cnt = cnt + 1;
          //   }
          // }
          // if (cnt == 9 && flag_to_check == false){
          //   flag_to_check = true;
          // }
          return flag_to_check;
    }

    this.isFullField = function(field){

        return !field.includes(EMPTY_MARK);
    }

    // this.isDraw = function(field){
    //   var flag_to_check = true;
    //   var cnt = 0;
    //   for (var i = 0; i < 3; i++){
    //     if(field[i]==field[i+3] && field[i+3] == field[i+6] && field[i+6] != EMPTY_MARK){    // To check all columns
    //       flag_to_check = false;
    //     }
    //
    //     if(field[3*i]==field[3*i+1] && field[3*i+1] == field[3*i+2] && field[3*i+2] != EMPTY_MARK){    // To check all rows
    //       flag_to_check = false;
    //     }
    //   }
    //
    //
    //     if(field[0] == field[4] && field[4] == field[8] && field[8] != EMPTY_MARK){    // To check first diagonal
    //       flag_to_check = false;
    //     }
    //
    //     if(field[2] == field[4] && field[4] == field[6] && field[6] != EMPTY_MARK){    // To check second diagonal
    //       flag_to_check = false;
    //     }
    //
    //     for(var j = 0; j < 9; j++){
    //       if(field[j]!= EMPTY_MARK){
    //         cnt = cnt + 1;
    //       }
    //     }
    //     if (cnt == 9 && flag_to_check == false){
    //       flag_to_check = true;
    //     }
    //     return flag_to_check;
    // }

    this.perform_move_user = function(field, key) {
        /*
        Moves empty-tile inside the field.
        :param field: current field state.
        :param key: move direction.
        :return: new field state (after the move).
        :raises: IndexError if the move can't me done.
        */
        field[key] = X_MARK;
        return field;
    }

    this.perform_move_bot = function(field, key){
      var flag = true;
      while(flag){
        var random_index_for_bot = Math.floor(Math.random() * 9);
        if(field[random_index_for_bot] == EMPTY_MARK){
          field[random_index_for_bot] = O_MARK;
          flag = false;
        }else{
          flag = true;
        }

      }
      return field;
    }

    this.handle_user_input = function(field) {
        /*
        user enters integers from 1-9
        as
        1  2  3
        4  5  6
        7  8  9
        */
        var flag = true;

        while(flag){
          var input = prompt('Please enter the mark "x" on the place from 1-9: ');
        if (input < 10 && input > 0 && Number.isInteger(+input) == true && field[input-1] == EMPTY_MARK){

            return input - 1;

          flag = false;
        }else{
          alert('Please enter the right digit!!!!')
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
       var field =  self.create_empty_field();
       self.print_field(field);
       while(true){
       var key = self.handle_user_input(field);
       field = self.perform_move_user(field, key);
       self.print_field(field);


       if(self.is_game_finished(field)){
         alert('You are winner. Congrats');
         break;
       };

       if(self.isFullField(field)){
         alert('It is draw))');
         break;
       }
       
       field = self.perform_move_bot(field, key);
       self.print_field(field);
       if(self.is_game_finished(field)){
         alert('You are LOST. SORRY)');
         break;
       };
       if(self.isFullField(field)){
         alert('It is draw))');
         break;
       }
       }
       // if (self.is_game_finished(field)){
         // alert('You are winner. Congrats');
       //   break;
       // }
       // self.perform_move_bot(field);
       // if (self.is_game_finished(field)){
       //   alert('Sorry you are lost!!!');
       //   break;
       // }
       // if(self.isFullField(field)){
       //   alert('It is draw))');
       //   break;
       // }



       // while(!self.is_game_finished(field)){
       //   self.print_field(field);
       //   var key = self.handle_user_input();
       //   while(self.perform_move(field, key)){
       //      self.perform_move(field, key)
       //    };
     // }

     alert('Thnxs for this game');

    }
}

var game = new Game();
game.main();
