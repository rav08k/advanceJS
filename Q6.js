const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin'])

//to delete any element from the set we use set.delete() method, it takes the element value to be deleted as an argument

// to delete 'Beethoven' 
set.delete('Beethoven');
console.log(...set); // output : 'Mozart' , 'Chopin' (as sets donot allow duplicate values)