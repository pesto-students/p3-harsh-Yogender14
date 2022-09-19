 function createIncrement(){
    let count=0;
     let message;
    function increment (){
        count ++;
     message = `count is ${count}`;

    }
// let message = `count is ${count} `; 

/* 
 we didn't specify that - count will increment with Message print  and also placed it  after the function scope, that's why  count is 0 printed. 
 position of code is really immportant -  otherwise we didn't desired Output
 
*/
  function log (){
    console.log(message);

  }
  return [increment , log];
}
 const [increment , log]= createIncrement();
 increment();
 increment();
 increment();
 log();  // output was  / count is 0 /

