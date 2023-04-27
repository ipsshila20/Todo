const a=5;
function outer (){
  const a=10;

  function inner(){
    const a=15;
    console.log(a)
  }
  inner();
  console.log(a);
}
outer();
console.log(a);