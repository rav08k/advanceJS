const name = {
  firstName: 'Philip',
  lastName: 'Fry'
};
const details = {
  job: 'Delivery Boy',
  employer: 'Planet Express'
};

//to copy the details object in name obejct and  merge them we use .assign() method

Object.assign(name,details);
console.log(name); //output : 
                    //firstName:Philip
                    //lastName:Fry
                    //job:Delivery Boy
                    //employer: Planet Express

