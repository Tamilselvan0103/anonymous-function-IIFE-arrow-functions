// Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array

// anonymous function

var a = [1,2,3,4,5,6,7,8,9,10,11,12,13]
var b = function(a){
    var result = [];
    for (var i=0; i<a.length; i++){
        if (a[i]%2 != 0)
        {
            result.push(a[i]);
        }
    }
    return result;
}
console.log(b(a))

// output 
//  [1, 3, 5, 7, 9, 11, 13]
// -----------------------------------------------------------------------------------------------------
// IIFE function

(function b(a){
    var result = [];
    for (var i=0; i<a.length; i++){
        if (a[i]%2 != 0)
        {
            result.push(a[i]);
        }
    }
 console.log(result)
})
([1,2,3,4,5,6,7,8,9,10,11,12,13]);

// output
//  [1, 3, 5, 7, 9, 11, 13]
// ------------------------------------------------------------------------------------------------
// b.Convert all the strings to title caps in a string array

// anonymous function 

var a = function (b){
  var c = b.toString()
  var d = c.split(" ") 
  var f = d.map(g=>g.charAt(0).toUpperCase() + g.substr(1).toLowerCase())
  var e = f.join(" ")
  return e
 }
 console.log(a(["convert all the strings to title caps in a string array"]))

//  output = Convert All The Strings To Title Caps In A String Array


// IIFE function

(function a (b){
  var c = b.toString()
  var d = c.split(" ") 
  var f = d.map(g=>g.charAt(0).toUpperCase() + g.substr(1).toLowerCase())
  var e = f.join(" ")
 console.log(e)
 })
 (["convert all the strings to title caps in a string array"])

 //  output = Convert All The Strings To Title Caps In A String Array

// ------------------------------------------------------------------------------------------------

// c. Sum of all numbers in an array

// anonymous function

var a = function(b){
 b = b.reduce((acc,cv)=> acc+cv,0)
 return b;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

//output = 55

//IIFE function 

(function a(b){
  b = b.reduce((acc,cv)=> acc+cv,0)
  console.log(b);
 })
 ([1,2,3,4,5,6,7,8,9,10]);

//  output = 55
// -----------------------------------------------------------------------------------------------------------
// d.Return all the prime numbers in an array

// anonymous function
var a = function (b){
  b = b.filter((c)=> {
    for (var i =2; i<=Math.sqrt(c); i++)
    {
      if (c % i ===0) 
      return false;
    }
    return true;
  })
return b
}
console.log(a([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

// output = [1, 2, 3, 5, 7, 11, 13]

//IIFE function;

(function a(b){
  b = b.filter((c)=> {
    for (var i =2; i<=Math.sqrt(c); i++)
    {
      if (c % i ===0) 
      return false;
    }
    return true;
  })
console.log(b)
})
([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

// output = [1, 2, 3, 5, 7, 11, 13]
// ---------------------------------------------------------------------------------------------

// e. Return all the palindromes in an array

// anonymous function

var a = function (arr) {
  const len = arr.length;
  if (len % 2 == 0) return false;

  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) return false;
  }
  return true;
}
console.log(a([1, 4, 2, 3, 1]));
// --------------------------------------------------------------------------------------------------

// f.Return median of two sorted arrays of the same size.

// anonymous function

var a = function(c,d){
  var b = c.length
  var e = d.length
  var f = b+e+1
  var g = f/2
  
return g
}
console.log(a([1,2,3,4,5],[6,7,8,9,10]))

// output = 5.5

//IIFE function 

(function a(c,d){
  var b = c.length
  var e = d.length
  var f = b+e+1
  var g = f/2
  
console.log(g)
})
([1,2,3,4,5],[6,7,8,9,10])

// output = 5.5
// ------------------------------------------------------------------------------------------------------------------

// g. Remove duplicates from an array

var a = function (b){
  var result = [];
  for (var i = 0; i < b.length; i++)
  {
    if (!result.includes(b[i]))
    {
      result.push(b[i]);
    }
  }
    return result
  }
  console.log(a([1,1,2,2,3,3,4,5,6,7]))


  // outpu = [1, 2, 3, 4, 5, 6, 7]

  // IIFE function

  (function a(b){
    var result = [];
    for (var i = 0; i < b.length; i++)
    {
      if (!result.includes(b[i]))
      {
        result.push(b[i]);
      }
    }
   console.log(result)
    })
  ([1,1,2,2,3,3,4,5,6,7])

  // output = [1, 2, 3, 4, 5, 6, 7].

  // -----------------------------------------------------------------------------------------------------

  // h.Rotate an array by k times

  // anonymous function
  var a = function (b,k){
    for (var i = 0; i <k; i++)
    {
     b.unshift(b.pop())
    }
    return b
   }
   console.log(a([1,2,3,4,5,6,7],5))

  //  output = [3, 4, 5, 6, 7, 1, 2]

  // IIFE function

  (function a(b,k){
    for (var i = 0; i <k; i++)
    {
     b.unshift(b.pop())
    }
    console.log(b)
   })
   ([1,2,3,4,5,6,7],5)

  //  output = [3, 4, 5, 6, 7, 1, 2]


  // 3. Do the below programs in arrow functions.

  // a. Print odd numbers in an array

  var b = (a)=>{
    var result = [];
    for (var i=0; i<a.length; i++){
        if (a[i]%2 != 0)
        {
            result.push(a[i]);
        }
    }
    return result;
}
console.log(b([1,2,3,4,5,6,7,8,9,10,11,12,13]))


// output = [1, 3, 5, 7, 9, 11, 13]
//  -----------------------------------------------------------------------------------------

// b. Convert all the strings to title caps in a string array

var a = (b)=>{
  var c = b.toString()
  var d = c.split(" ") 
  var f = d.map(g=>g.charAt(0).toUpperCase() + g.substr(1).toLowerCase())
  var e = f.join(" ")
  return e
 }
 console.log(a(["convert all the strings to title caps in a string array"]))

//  output = Convert All The Strings To Title Caps In A String Array
//  -----------------------------------------------------------------------------------------------------------
// c. Sum of all numbers in an array

var a =(b)=>{
  b = b.reduce((acc,cv)=> acc+cv,0)
  return b;
 }
 console.log(a([1,2,3,4,5,6,7,8,9,10]));

//  output = 55
// --------------------------------------------------------------------------------------------------

// d.Return all the prime numbers in an array

var a =  (b)=>{
  b = b.filter((c)=> {
    for (var i =2; i<=Math.sqrt(c); i++)
    {
      if (c % i ===0) 
      return false;
    }
    return true;
  })
return b
}
console.log(a([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

// output = [1, 2, 3, 5, 7, 11, 13]
// -----------------------------------------------------------------------------------------------

// e.Return all the palindromes in an array

var a = (arr)=> {
  const len = arr.length;
  if (len % 2 == 0) return false;

  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) return false;
  }
  return true;
}
console.log(a([1, 4, 2, 3, 1]));

// output = false
// ------------------------------------------------------------------------------------------





