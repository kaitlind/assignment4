//Practice with Javascript OOP Concepts

// //#1 --> Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 
// var ANIMAL = ANIMAL || {};

// ANIMAL.Dog = function(){
// };

// ANIMAL.Cat = function(){
// };



// //#2 -->	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
// var Cat ={
//     type: "cat",
//     breed: "persian",
//     color: "white", 
// }

// function Dog(){
//     this.type = "dog";
//     this.breed = "rottweiler";
//     this.color = "black and tan";
// };
// var myDog = new Dog(); 



// //#3 --> Directly underneath, create a new instance of the Dog class.
// var yourDog = new Dog();



// //#4 --> 4. Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
// function Animal(){
//   console.log("The Animal has been created");  
// };



// //#5 --> 5. Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
// function Animal(x){
//   console.log(x);  
// };

// var x = new Animal("The Animal has been created");



// //#6 --> 6. Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
// function Animal(type, breed, color, height, aLength){
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height; 
//     this.aLength = aLength;
// };

// var Elephant = new Animal("elephant", "African", "gray", "11ft", "16 ft");



// //#7 --> 7. Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
// function Animal(type, breed, color, height, aLength){
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height; 
//     this.aLength = aLength;
// };

// var Elephant = new Animal("elephant", "African", "gray", "11ft", "16 ft");

// for (var i in Elephant){
//     console.log(i);
// }



// //#8 --> 8. Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
// function Animal(type, breed, color, height, aLength){
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height; 
//     this.aLength = aLength;
    
//     this.speak = function(){
//         if (this.type == "dog"){
//             return ("The " + color + " dog is barking!");
//         } else { 
//             return ("The " + color + " cat is meowing!");
//         }
//     };
// };

// var Dog = new Animal("dog", "rottweiler", "black and tan", "2.5ft", "3ft");
// var Cat = new Animal("cat", "persian", "white", "1ft", "1ft");

// var x = Dog.speak();

// console.log(x);



// //#9 --> Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
// function Animal(type, breed, color, height, aLength){
//     var type = type;
//     var breed = breed;
//     var color = color;
//     var height = height; 
//     var aLength = aLength;
    
//     var checkType = function(){
//         if (type == "dog"){
//           return "dog";  
//         } else {
//             return "cat";
//         }
//     }
    
//     this.speak = function(){
//         var result = checkType();
//         console.log("The " + result + " has made a noise!");
//     };
// };

// var Dog = new Animal("dog", "rottweiler", "black and tan", "2.5ft", "3ft");
// var Cat = new Animal("cat", "persian", "white", "1ft", "1ft");

// Dog.speak();
// Cat.speak();



// //#10 --> 10. Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.
// String.prototype.findWords = function(x){
//     var find = "";
//     var findSplit = this.split(" ");
//     var wordCount = 0;
//     for (var i=0; i<this.length;i++){
//         if (findSplit[i] == x){
//             wordCount = wordCount+1;
//         }
//     }
//     alert('You have found the word' + ' "' + x + '" ' + wordCount + ' times.');
// };

// var paragraph = "We love to find fireflies at night and we love the midnight dew.";
// console.log(paragraph.findWords("love"));



// //The Recipe Card
// function favRecipe(title, servings, ingredients){
//     this.title = title;
//     this.servings = servings;
//     this.ingredients = ingredients;
//     var formatIngredients = ingredients.join("\n");
//     this.recipe = function(){
//          console.log(title + "\n" + "Serves: " + servings + "\n" + "Ingredients:" + "\n" + formatIngredients);
//     };
// }

// var guacamole = new favRecipe("Guacamole", 4, ["- 3 Avocados", "- 1 Lime","- 1Teaspoon Salt", "- 1/2 Cup Onion","- 3 Tablespoons Cilantro", "- 2 Diced Tomatoes", "- 1 Teaspoon Garlic", "- 1 Pinch Ground Pepper"]);

// guacamole.recipe();



// //The Reading List
// function Book(title, author, alreadyRead){
//     this.title = title;
//     this.author = author;
//     this.alreadyRead = alreadyRead;
// }

// var Vowell = new Book('"The Partly Cloudy Patriot"', 'Sarah Vowell', true);
// var Siken = new Book('"War of the Foxes"', 'Richard Siken', false);
// var Hoffman = new Book('"Paper Doll Fetus: Poems"', 'Cynthia Marie Hoffman', false);
// var Smith = new Book('"Life on Mars"', 'Tracy K. Smith', true);
// var Young = new Book ('"Fall Higher"', 'Dean Young', true);

// var booksList = [Vowell, Siken, Hoffman, Smith, Young];

// for (var i=0; i<booksList.length; i++){
//     if (booksList[i].alreadyRead == true){
//         console.log('You already read ' + booksList[i].title + ' by ' + booksList[i].author + ".");
//     } else {
//         console.log('You still need to read '+ booksList[i].title + ' by ' + booksList[i].author + ".");
//     }
// }
