/* this is the Javascript file  */

// creating variables

/*

var shape = "circle";

var topics = "HTML, CSS, JAVASCRIPT, GIT";

// logging these variables to the console

console.log(topics);

*/

// section 3.3.4 Conditional logic using Javascript

// lets create a variable here

var topic = "HTML";

// lets create a conditional statement that prints an output to the console, if condition is truthy.

/*

if (topic === "HTML") {
  console.log("Lets study HTML");
} else if (topic === "CSS") {
  console.log("Lets study CSS");
} else if (topic === "GIT") {
  console.log("Lets study GIT");
} else if (topic === "JAVASCRIPT") {
  console.log("Lets study JAVASCRIPT");
} else {
  console.log("Please try again !");
}
*/
// creating an array variable

var shapes = ["circle", "triangle", "square", "pentagon", "rectangle"];

// lets loop through this array variable and print the results to the console..

for (var i = 0; i < shapes.length; i++) {
  console.log(shapes[i]);
}

// lets create an array variable again for topics

var topics = ["HTML", "CSS", "GIT", "JAVASCRIPT"];

// lets now loop through the above array and print the results

for (var i = 0; i < topics.length; i++) {
  console.log(topics[i]);
}
