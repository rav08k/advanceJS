function foo1() {
  return {
    bar: "hello"
  };
}
function foo2() {
  return
  {
    bar: "hello"
  };
}

console.log(foo1()) // output : object bar : "hello"
console.log(foo2()) // output : undefined

//REASON
//the output of both function returns will be different as in function foo1 the curly braces starts just after the return keyword so it is the part of the return statement, thus it returns the "bar" object
// and in function foo2, the curly braces starts from the new line after the return keyword and as the semicolon is optional in JS thus JS engine treats this as line break and the object defined after it is not a part of the return statement, so it returns "undefined"