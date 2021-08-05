function Hero(name, level)
{
name = name;
level = level;

}
// test code:
var hero2 = new Hero;
var hero2 = new Hero;
var hero2 = new Hero;
var hero1 = new Hero;

hero1.name = 'ravi';
hero2.name = 'avi';
hero1.level = 4;
hero2.level = 24;

console.log(hero1); // output : name = ravi , level = 4
console.log(hero2); // output : name = avi , level = 24

//yes this code is correct as here name and level is defined in the Hero function and if we define a new function a new function with the  help of the  constructor function each new function gets their own copy of name and level variables.