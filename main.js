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
                          dinnerChoice: ["salad", "beef", "ice cream"]
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

//console.log("Lauren/'s appetizer is " + invitees.);

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

// 12. Get the length of the fourth classmate's name.

// 13. Clear the classmates value.

// 14. Create an empty array called "books".

// 15. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" array.



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

// 17. Get the length of the author the the third book.

// 18. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)

// 19. Remove the second book from the books Array.

// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor Notation.
