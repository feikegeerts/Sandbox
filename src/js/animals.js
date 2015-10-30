// JQUERY ANIMAL TEMPLATE
 
var template = Handlebars.templates["animals-template"];
var data = {animals: [
  {type: "Dog", sound: "woof"},
  {type: "Cat", sound: "meow"},
  {type: "Cow", sound: "moo"},
  {type: "Bots", sound: "bang"},
  {type: "Hello", sound: "Goodbye"}
]};
$("#animalList").html(template(data));