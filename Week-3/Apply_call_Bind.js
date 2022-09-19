// Apply , Call and Bind 

 // Example  for Call 
 let UserDetails= {
    name: "XYZ",
     branch: "CSE",
     Designation:" Engineer",
/*
      printDetails :function(){       

     console.log(this.name)                               // Hera we  Create Object User Details  and create a one method with printdetails
                                                     // THis keyword points to object. -- We Can also  use  or access the proper by method 
 
      } */
     
    }
    
 
//  UserDetails.printDetails(); // function calling 


let UserDetails2= {
    name: "ABC",
     branch: "CSE",
     Designation:" Engineer",
     
} 


  // Example for  Apply 
  
  let printDetails= function (state , country) {
    console.log(this.name + " "+state+ " "+country);
} 
 console.log("\n" +" Using Call Function" + "\n");
  printDetails.call(UserDetails2,"delhi","India" ); // passing New Parameters   
//  printDetails.call(UserDetails, "delhi","India" );


console.log("\n" +" Using Apply Function" + "\n");

 printDetails.apply(UserDetails, ["delhi","India"] ); // With help of Apply -- we can Apply  New Paramemters with   Array List 
 printDetails.apply(UserDetails2, ["delhi","India"] );
   

//bind 

console.log("\n" +" Using Bind Function" + "\n");

    let newbind=printDetails.bind(UserDetails2, ["delhi","India"]); 
    
    newbind();//  function call
    console.log(newbind);  // invoke the Function Detailss

    // Bind - Just create a New Copy of Function .  those we can Invoke it Late  a

  