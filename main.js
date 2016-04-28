//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well.
// Use any elements you like!

// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.

var me = {
          name: 'phil',
          city: 'seattle',
          job_title: 'bossman',
}

console.log("Question 1");
console.log(me);

// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

me.family = ['Dad', 'Mom', 'Liz', 'Rob'];

console.log("Question 2");
console.log(me);

// 3. Using the "me" object, use the two different methods to access the value of your city.

console.log("Question 3");
console.log(me['city']);
console.log(me.city);

// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"],
                      	  weirdo2: weirdo2
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)

console.log("Question 4");
console.log(invitees.adults[0].dinnerChoice);

// 5. Access Pablo's table number.

console.log("Question 5");
console.log(invitees.children[1].table);

// 6. Access Lauren's seating specialConsideration.

console.log("Question 6");
console.log(invitees.adults[2].specialConsiderations);

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)

console.log("Question 7");
console.log(invitees.adults[1].dinnerChoice[2]);

// 8. Access Ada's allergies.

console.log("Question 8");
console.log(invitees.children[2].allergies);

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

console.log("Question 9");

//console.log("Lauren\'s appetizer is " + invitees.adults[2].dinnerChoice[0] + "." + " She will be eating " + invitees.adults[2].dinnerChoice[1] + " for dinner and has selected " + invitees.adults[2].dinnerChoice[2] + " for dessert.");

//weirdo(invitees.adults[2]);
//weirdo(invitees.adults[0]);
//weirdo(invitees.adults[1]);

invitees.adults[0].weirdo2();

invitees.adults[1].weirdo2 = weirdo2;

invitees.adults[1].weirdo2();

function weirdo (person) {
console.log(person.name + "\'s appetizer is " + person.dinnerChoice[0] + "." + " She will be eating " + person.dinnerChoice[1] + " for dinner and has selected " + person.dinnerChoice[2] + " for dessert.");	
	
}

function weirdo2 () {
console.log(this.name + "\'s appetizer is " + this.dinnerChoice[0] + "." + " She will be eating " + this.dinnerChoice[1] + " for dinner and has selected " + this.dinnerChoice[2] + " for dessert.");	
	
}

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

console.log("Question 10");

var jsWorkshop = new Object();
console.log(jsWorkshop);

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

console.log("Question 11");

jsWorkshop.classmates = ['liz', 'eric', 'rob', 'ellen', 'steve'];
console.log(jsWorkshop);

// 12. Get the length of the fourth classmate's name.

console.log("Question 12");
console.log(jsWorkshop.classmates[3].length);

// 13. Clear the classmates value.

console.log("Question 13");

jsWorkshop.classmates = null;
console.log(jsWorkshop);

// 14. Create an empty array called "books".

console.log("Question 14");
var books = [ ];
console.log(books);


// 15. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" array.


console.log("Question 15");


books.ISBN222 = {
	
	title: "You Had Me at Woof",
	author: "Julie Klum",
	pages: '207'
	
}


books.ISBN333 = {
	
	title: "The Catcher in the Rye",
    author: "JD Salinger",
    pages: '214'
	
}

books.ISBN444 = {
	
	title: "Bangkok Haunts",
    author: "John Burdett",
    pages: '569'
	
}
	
  
console.log(books);



// Final desired result:
    // var books = [ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             ]

// 16. Access the author of the first book.

console.log("Question 16");
console.log(books.ISBN222.author);

// 17. Get the length of the author the the third book.

console.log("Question 17");
console.log(books.ISBN444.author.length);

// 18. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)

console.log("Question 18");

books.ISBN222.dateRead = '1999';
books.ISBN333.dateRead = '2000';
books.ISBN444.dateRead = '2001';

console.log(books);


// 19. Remove the second book from the books Array.

console.log("Question 19");

delete books.ISBN333;
console.log(books);


// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor Notation.
