function foo(x){
  if (x === null) {
    return 0; //This is correct
  }
  return x.length;
}