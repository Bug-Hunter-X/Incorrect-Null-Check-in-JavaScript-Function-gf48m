function foo(x){
  if (x == null) {
    return 0; //This is wrong
  }
  return x.length;
}