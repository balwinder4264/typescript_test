function add(n1: number) {
  //number is positive integer
  if(n1<0){
    return "Not valid number"
  }
  if(n1%22==0){
    return "candybar";
  }
  if(n1%11==0){
    return "bar";
  }
  if(n1%2==0){
    return "candy";
  }
  //return number if number is divisible by any
  return n1;
}



console.log(add(3));
